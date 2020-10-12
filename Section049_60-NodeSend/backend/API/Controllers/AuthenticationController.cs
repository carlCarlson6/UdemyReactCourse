using System;
using System.Threading.Tasks;
using API.Messages.User;
using Microsoft.AspNetCore.Mvc;
using Services.User;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly AuthenticateUserService authenticateUserService;
    
        public AuthenticationController(AuthenticateUserService authenticateUserService)
        {
            this.authenticateUserService = authenticateUserService;
        }

        [HttpPost]
        public async Task<ActionResult<AuthenticateUserResponse>> Authenticate([FromBody] AuthenticateUserRequest request)
        {
            try
            {
                Tuple<String, String> result = await this.authenticateUserService.ExecuteService(request.Name, request.Password);
                
                return new AuthenticateUserResponse(result.Item1, result.Item2);
            }
            catch (Exception except)
            {
                throw new Exception(except.Message);
            }
        }
    }
}
