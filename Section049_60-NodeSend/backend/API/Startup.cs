using System;
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
            services.AddSingleton<PasswordUtils>();

            services.Configure<JwtSettings>(Configuration.GetSection(nameof(JwtSettings)));
            services.AddSingleton<JwtSettings>(servicesProvider => servicesProvider.GetRequiredService<IOptions<JwtSettings>>().Value);
            services.AddSingleton<JwtUtils>();

            services.AddSingleton<AuthenticateUserService>();

            services.Configure<UserRepositorySettings>(Configuration.GetSection("MongoRepositoriesSettings").GetSection(nameof(UserRepositorySettings)));
            services.AddSingleton<IMongoDatabaseSettings<IUser>, UserRepositorySettings>(serviceProvider => serviceProvider.GetRequiredService<IOptions<UserRepositorySettings>>().Value);
            services.AddSingleton<IRepository<IUser>, UserRepository>();
            services.AddSingleton<AddUserService>();

            services.AddControllers();
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
