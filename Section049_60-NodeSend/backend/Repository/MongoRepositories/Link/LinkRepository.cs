using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.IMongoDatabaseSettings;
using Core.Models;
using Core.Repository;

namespace Repository.MongoRepositories.Link
{
    public class LinkRepository : MongoRepository<LinkModel, ILink>, IRepository<ILink>
    {
        public LinkRepository(IMongoDatabaseSettings<ILink> settings) : base(settings) { }
        
        public async Task<ILink> Create(ILink entity)
        {
            await this.mongoCollection.InsertOneAsync((LinkModel)entity);
            return entity;
        }

        public Task<List<ILink>> Read()
        {
            throw new NotImplementedException();
        }

        public Task<ILink> Read(string name)
        {
            throw new NotImplementedException();
        }

        public Task Remove(string id)
        {
            throw new NotImplementedException();
        }

        public Task<ILink> Update(ILink entityToUpdate)
        {
            throw new NotImplementedException();
        }
    }
}
