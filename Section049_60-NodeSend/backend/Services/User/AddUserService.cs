using System;
using System.Threading.Tasks;
using Common.ExceptionTypes;
using Common.Mongo;
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
                UserModel user = new UserModel
                {
                    Id = MongoDbIdGenerator.Generate(),
                    Name = userName,
                    Password = passwordUtils.EncryptPassword(password)
                };
                
                IUser createdUser = await this.userRepo.Create(user);

                return createdUser;
            }
            catch(Exception except) 
            {
                throw new Exception(except.Message);
            }
        }
        
    }
}
