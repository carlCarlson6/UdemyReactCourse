using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using API.Messages.User;
using Microsoft.AspNetCore.Mvc;
using Services.User;
using UseCases;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class AuthenticationController : ControllerBase
    {
        private readonly AuthenticateUserUseCase authenticateUser;
    
        public AuthenticationController(AuthenticateUserUseCase authenticateUserUseCase)
        {
            this.authenticateUser = authenticateUserUseCase;
        }

        [HttpPost]
        public async Task<ActionResult<AuthenticateUserResponse>> Authenticate([FromBody] AuthenticateUserRequest request)
        {
            try
            {
                Dictionary<String, String> result = await this.authenticateUser.ExecuteUseCase(request.Name, request.Password);            
                return new AuthenticateUserResponse(result["UserId"], result["Token"]);
            }
            catch (Exception except)
            {
                throw new Exception(except.Message);
            }
        }
    }
}
