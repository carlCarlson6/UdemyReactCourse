using System;
using Core.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Repository.MongoRepositories.User
{
    public class UserModel : IUser
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public String Id { get; set; }
        public String Name { get; set; }
        public String Password { get; set; }

        public String GenerateID()
        {
            String id = ObjectId.GenerateNewId().ToString();
            return id;
        }

    }
}
