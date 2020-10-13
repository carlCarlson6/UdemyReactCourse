using System;
using System.Threading.Tasks;
using Common.ExceptionTypes;
using Core.Models;
using Services.Link;

namespace UseCases.Link
{
    public class CreateNewLinkUseCase
    {
        private readonly AddLinkService addLink;
        CreateNewLinkUseCase(AddLinkService addLinkService)
        {
            this.addLink = addLinkService;
        }

        public async Task<ILink> ExecuteUseCase(String fileName, String originalFileName, int numberDownloads, String password, String createdBy)
        {
            this.ValidateNumberDownloads(numberDownloads);
            return await this.addLink.ExecuteService(fileName, originalFileName, numberDownloads, password, createdBy);
        }

        private void ValidateNumberDownloads(int numberDownloads)
        {
            if(numberDownloads < 1)
            {
                throw new Exception(ExceptionTypes.NumberDownloadsLessThanOne);
            }
        }
    }
}
