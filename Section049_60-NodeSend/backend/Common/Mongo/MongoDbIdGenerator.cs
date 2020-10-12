using System;
using MongoDB.Bson;

namespace Common.Mongo
{
    public class MongoDbIdGenerator
    {
        public static String Generate() 
        {
            String id = ObjectId.GenerateNewId().ToString();
            return id;           
        }
    }
}
