using System;
using System.Threading.Tasks;
using Common.Utils;
using Core.Models;
using Core.Repository;

namespace Services.User
{
    public class AuthenticateUserService
    {
        private readonly IRepository<IUser> userRepo;
        private readonly PasswordUtils passwordUtils;
        private readonly JwtUtils jwtUtils;
        public AuthenticateUserService(IRepository<IUser> userRepository, PasswordUtils passwordUtils, JwtUtils jwtUtils) 
        {
            this.userRepo = userRepository;
            this.passwordUtils = passwordUtils;
            this.jwtUtils = jwtUtils;
        }

        public async Task ExecuteService(String userName, String password)
        {
            try
            {
                IUser user = await this.GetUser(userName);
                this.VerifyPassword(password, user.Password);
            }
            catch(Exception except) 
            {
                throw new Exception(except.Message);
            }
        }

        private async Task<IUser> GetUser(String userName)
        {
            IUser user = await this.userRepo.Read(userName);

            if(user == null)
            {
                throw new Exception("user does not exist");
            }            

            return user;
        }

        private void VerifyPassword(String password, String storedPassword)
        {
            if(!this.passwordUtils.VerifyPassword(password, storedPassword))
            {
                throw new Exception("incorrect password");
            }
        }
    }
}
