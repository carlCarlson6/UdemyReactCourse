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

        public String ExecuteService(IUser user, String inputPassword)
        {
            try
            {
                this.VerifyPassword(inputPassword, user.Password);
                String token = this.tokenCreator.Create(user);
                return token;
            }
            catch(Exception except) 
            {
                throw new Exception(except.Message);
            }
        }

        private void VerifyPassword(String inputPassword, String storedPassword)
        {
            if(!this.passwordUtils.VerifyPassword(inputPassword, storedPassword))
            {
                throw new Exception("incorrect password");
            }
        }
    }
}
