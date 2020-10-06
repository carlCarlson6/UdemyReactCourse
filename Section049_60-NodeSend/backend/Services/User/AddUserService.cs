using System;
using System.Threading.Tasks;
using Common.Utils;
using Core.Models;
using Core.Repository;
using Repository.MongoRepositories.User;

namespace Services.User
{
    public class AddUserService
    {
        private readonly IRepository<IUser> userRepo;
        private readonly PasswordUtils passwordUtils;

        public AddUserService(IRepository<IUser> userRepository, PasswordUtils passwordUtils) 
        {
            this.userRepo = userRepository;
            this.passwordUtils = passwordUtils;
        }

        public async Task<IUser> ExecuteService(String userName, String password)
        {
            try 
            {
                await this.ExecuteValidations(userName, password);

                UserModel user = new UserModel();

                user.Id = user.GenerateID();
                user.Name = userName;
                user.Password = passwordUtils.EncryptPassword(password);

                IUser createdUser = await this.userRepo.Create(user);

                return createdUser;
            }
            catch(Exception except) 
            {
                throw new Exception(except.Message);
            }
        }

        private async Task ExecuteValidations(String userName, String password)
        {
            if(!await this.CheckUserAlreadyExists(userName))
            {
                throw new Exception("user already exists");
            }

            if(!this.PasswordValidations(password))
            {
                throw new Exception("password is not valid");
            }
        }

        private async Task<Boolean> CheckUserAlreadyExists(String userName)
        {
            IUser user = await this.userRepo.Read(userName);
            
            if(user != null) 
            {
                return false;
            }

            return true;
        }

        private Boolean PasswordValidations(String password)
        {
            if(password.Length < 6)
            {
                return false;
            }

            return true;
        }

    }
}
