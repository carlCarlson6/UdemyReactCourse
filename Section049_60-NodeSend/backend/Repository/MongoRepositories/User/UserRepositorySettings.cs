using System;
using Core.IMongoDatabaseSettings;
using Core.Models;

namespace Repository.MongoRepositories.User
{
    public class UserRepositorySettings : IMongoDatabaseSettings<IUser>
    {
        public string CollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
