using System;
using Core.IMongoDatabaseSettings;
using Core.Models;

namespace Repository.MongoRepositories.Link
{
    public class LinkRepositorySettings : IMongoDatabaseSettings<ILink>
    {
        public string CollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}
