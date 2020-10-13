using System;
using Core.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Repository.MongoRepositories.Link
{
    public class LinkModel : ILink
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public String Id { get; set; }
        public String Url { get; set; }
        public String FileName { get; set; }
        public String OriginalFileName { get; set; }
        public int NumberDownloads { get; set; }
        public String Password { get; set; }
        public String CreatedBy { get; set; }
        public DateTime CreatedAt { get; set; }
        
    }
}
