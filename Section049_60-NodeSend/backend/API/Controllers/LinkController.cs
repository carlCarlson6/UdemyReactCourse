using System;
using System.Threading.Tasks;
using API.Messages.Link;
using Microsoft.AspNetCore.Mvc;
using UseCases.Link;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class LinksController : ControllerBase
    {
        private readonly CreateNewLinkUseCase createNewLink;

        public async Task<ActionResult<AddLinkResponse>> CreateLink([FromBody] AddLinkRequest request)
        {
            try
            {
                await this.createNewLink.ExecuteUseCase(request.FileName, request.OriginalFileName, request.NumberDownloads, request.Password, request.CreatedBy);
                throw new NotImplementedException();
            }
            catch(Exception except)
            {
                return BadRequest(except.Message);
            }
        }
    }
}
