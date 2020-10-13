using System;
using System.Text;
using Common.JWT;
using Common.Utils;
using Core.IMongoDatabaseSettings;
using Core.Models;
using Core.Repository;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Repository.MongoRepositories.User;
using Services.User;
using Services.Link;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using UseCases.User;
using Repository.MongoRepositories.Link;
using UseCases.Link;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            this.AddJwtSettings(services);
            this.AddUtils(services);
            this.AddMongoRepositories(services);
            this.AddServices(services);
            this.AddUseCases(services);
            services.AddControllers();
            this.AddAuthentication(services);
        }

        public void AddMongoRepositories(IServiceCollection services)
        {
            services.Configure<UserRepositorySettings>(Configuration.GetSection("MongoRepositoriesSettings").GetSection(nameof(UserRepositorySettings)));
            services.AddSingleton<IMongoDatabaseSettings<IUser>, UserRepositorySettings>(serviceProvider => serviceProvider.GetRequiredService<IOptions<UserRepositorySettings>>().Value);
            services.AddSingleton<IRepository<IUser>, UserRepository>();

            services.Configure<LinkRepositorySettings>(Configuration.GetSection("MongoRepositoriesSettings").GetSection(nameof(UserRepositorySettings)));
            services.AddSingleton<IMongoDatabaseSettings<ILink>, LinkRepositorySettings>(serviceProvider => serviceProvider.GetRequiredService<IOptions<LinkRepositorySettings>>().Value);
            services.AddSingleton<IRepository<ILink>, LinkRepository>();
        }
        public void AddJwtSettings(IServiceCollection services)
        {
            services.Configure<JwtSettings>(Configuration.GetSection(nameof(JwtSettings)));
            services.AddSingleton<JwtSettings>(servicesProvider => servicesProvider.GetRequiredService<IOptions<JwtSettings>>().Value);
        }
        public void AddUtils(IServiceCollection services)
        {
            services.AddSingleton<PasswordUtils>();
            services.AddSingleton<TokenCreator>();
        }
        public void AddServices(IServiceCollection services)
        {
            services.AddSingleton<AddUserService>();
            services.AddSingleton<AuthenticateUserService>();
            
            services.AddSingleton<AddLinkService>();
        }
        public void AddUseCases(IServiceCollection services)
        {
            services.AddSingleton<CreateNewUserUseCase>();
            services.AddSingleton<AuthenticateUserUseCase>();
            
            services.AddSingleton<CreateNewLinkUseCase>();
        }
        public void AddAuthentication(IServiceCollection services)
        {
            String tokenSecret = Configuration.GetSection(nameof(JwtSettings)).Get<JwtSettings>().Secret;
            byte[] bytesKey = Encoding.ASCII.GetBytes(tokenSecret);
            services.AddAuthentication(authOptions => 
                {
                    authOptions.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    authOptions.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                }
            ).AddJwtBearer(jwtBearerOptions =>
                {
                    jwtBearerOptions.RequireHttpsMetadata = false;
                    jwtBearerOptions.SaveToken = true;
                    jwtBearerOptions.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(bytesKey),
                        ValidateIssuer = false,
                        ValidateAudience = false
                    };
                }
            );
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints => { endpoints.MapControllers();
            });
        }
    }
}
