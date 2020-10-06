using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.IMongoDatabaseSettings;
using Core.Models;
using Core.Repository;
using MongoDB.Driver;

namespace Repository.MongoRepositories.User
{
    public class UserRepository : MongoRepository<UserModel, IUser>, IRepository<IUser>
    {
        private readonly IMongoCollection<UserModel> userCollection;

        public UserRepository(IMongoDatabaseSettings<IUser> settings) : base(settings) { }

        public Task<IUser> Create(IUser entity)
        {
            throw new NotImplementedException();
        }

        public Task<List<IUser>> Read()
        {
            throw new NotImplementedException();
        }

        public Task<IUser> Read(string id)
        {
            throw new NotImplementedException();
        }

        public Task Remove(string id)
        {
            throw new NotImplementedException();
        }

        public Task<IUser> Update(IUser entityToUpdate)
        {
            throw new NotImplementedException();
        }
    }
}
