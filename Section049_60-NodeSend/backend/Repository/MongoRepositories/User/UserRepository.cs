using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.IMongoDatabaseSettings;
using Core.Models;
using Core.Repository;
using MongoDB.Driver;
using System.Linq;

namespace Repository.MongoRepositories.User
{
    public class UserRepository : MongoRepository<UserModel, IUser>, IRepository<IUser>
    {
        public UserRepository(IMongoDatabaseSettings<IUser> settings) : base(settings) { }

        public IMongoDatabaseSettings<IUser> Settings { get; }

        public async Task<IUser> Create(IUser entity)
        {
            await this.mongoCollection.InsertOneAsync((UserModel)entity);
            return entity;
        }

        public async Task<List<IUser>> Read()
        {
            IAsyncCursor<UserModel> usersAsyncCursor = await this.mongoCollection.FindAsync(user => true);
            List<IUser> users = await usersAsyncCursor.ToListAsync<IUser>();
            return users;
        }

        public async Task<IUser> Read(String name)
        {
            IAsyncCursor<UserModel> userFoundedAsyncCursor = await this.mongoCollection.FindAsync<UserModel>(user => user.Name == name);
            IUser userFounded = await userFoundedAsyncCursor.FirstOrDefaultAsync();
            return userFounded;
        }

        public Task Remove(String id)
        {
            throw new NotImplementedException();
        }

        public Task<IUser> Update(IUser entityToUpdate)
        {
            throw new NotImplementedException();
        }
    }
}
