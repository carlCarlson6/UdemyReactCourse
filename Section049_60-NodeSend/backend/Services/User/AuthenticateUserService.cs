using System;
using System.Threading.Tasks;
using Common.JWT;
using Common.Utils;
using Core.Models;
using Core.Repository;

namespace Services.User
{
    public class AuthenticateUserService
    {
        private readonly IRepository<IUser> userRepo;
        private readonly PasswordUtils passwordUtils;
        private readonly TokenCreator tokenCreator;
        public AuthenticateUserService(IRepository<IUser> userRepository, PasswordUtils passwordUtils, TokenCreator tokenCreator) 
        {
            this.userRepo = userRepository;
            this.passwordUtils = passwordUtils;
            this.tokenCreator = tokenCreator;
        }

        public async Task<Tuple<String, String>> ExecuteService(String userName, String password)
        {
            try
            {
                IUser user = await this.GetUser(userName);
                this.VerifyPassword(password, user.Password);
                String token = this.tokenCreator.Create(user);
                return new Tuple<string, string>(user.Id, token);
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
