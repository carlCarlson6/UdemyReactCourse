using System;
using Core.IMongoDatabaseSettings;
using Core.Repository;
using MongoDB.Driver;

namespace Repository.MongoRepositories
{
    public abstract class MongoRepository<T, J> where T:J
    {
        private readonly IMongoCollection<T> mongoCollection;

        public MongoRepository(IMongoDatabaseSettings<J> settings) 
        {
            MongoClient client = new MongoClient(settings.ConnectionString);
            IMongoDatabase database = client.GetDatabase(settings.DatabaseName);
            this.mongoCollection = database.GetCollection<T>(settings.CollectionName);
        }
    }
}
