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
        public AuthenticateUserService(IRepository<IUser> userRepository, PasswordUtils passwordUtils) 
        {
            this.userRepo = userRepository;
            this.passwordUtils = passwordUtils;
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

        public async Task<IUser> GetUser(String userName)
        {
            IUser user = await this.userRepo.Read(userName);

            if(user == null)
            {
                throw new Exception("user does not exist");
            }            

            return user;
        }

        public void VerifyPassword(String password, String storedPassword)
        {
            if(!this.passwordUtils.VerifyPassword(password, storedPassword))
            {
                throw new Exception("incorrect password");
            }
        }
    }
}
