using System;
using Core.IMongoDatabaseSettings;
using Core.Repository;
using MongoDB.Driver;

namespace Repository.MongoRepositories
{
    public abstract class MongoRepository<T, J> where T:J
    {
        protected readonly IMongoCollection<T> mongoCollection;

        protected MongoRepository(IMongoDatabaseSettings<J> settings) 
        {
            MongoClient client = new MongoClient(settings.ConnectionString);
            IMongoDatabase database = client.GetDatabase(settings.DatabaseName);
            this.mongoCollection = database.GetCollection<T>(settings.CollectionName);
        }
    }
}
