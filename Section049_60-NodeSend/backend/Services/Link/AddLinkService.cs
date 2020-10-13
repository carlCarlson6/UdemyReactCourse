using System;
using System.Threading.Tasks;
using Common.Mongo;
using Core.Models;
using Core.Repository;
using Repository.MongoRepositories.Link;

namespace Services.Link
{

    public class AddLinkService
    {
        private readonly IRepository<ILink> linkRepo;
        public AddLinkService(IRepository<ILink> linkRepository)
        {
            this.linkRepo = linkRepository;
        }

        public async Task<ILink> ExecuteService(String fileName, String originalFileName, int numberDownloads, String password, String createdBy)
        {
            LinkModel link = new LinkModel
            {
                Id = MongoDbIdGenerator.Generate(),
                Url = new Guid().ToString(),
                FileName = fileName,
                OriginalFileName = originalFileName,
                NumberDownloads = numberDownloads,
                Password = password,
                CreatedBy = createdBy,
                CreatedAt = new DateTime()
            };

            return await this.linkRepo.Create(link);
        }
    
    }
}
