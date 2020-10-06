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
        private readonly IRepository<IUser> userRepository;
        private readonly PasswordUtils passwordUtils;

        public AddUserService(IRepository<IUser> repository, PasswordUtils passwordUtils) 
        {
            this.userRepository = repository;
            this.passwordUtils = passwordUtils;
        }

        public async Task<IUser> ExecuteService(String userName, String password)
        {
            UserModel user = new UserModel();

            user.Id = user.GenerateID();
            user.Name = userName;
            user.Password = passwordUtils.EncryptPassword(password);;

            IUser createdUser = await this.userRepository.Create(user);

            return createdUser;
        }

    }
}
