using System;
using System.Threading.Tasks;
using API.Messages;
using API.Messages.User;
using Core.Models;
using Microsoft.AspNetCore.Mvc;
using Services.User;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly AddUserService addUserService;
        private readonly AuthenticateUserService authenticateUserService;

        public UserController(AddUserService addUserService, AuthenticateUserService authenticateUserService)
        {
            this.addUserService = addUserService;
            this.authenticateUserService = authenticateUserService;
        }

        [HttpPost]
        public async Task<ActionResult<AddUserResponse>> AddUser([FromBody] AddUserRequest request) 
        {
            try
            {
                IUser createdUser = await this.addUserService.ExecuteService(request.Name, request.Password);
                
                return new AddUserResponse(createdUser.Id);
            }
            catch(Exception except)
            {
                return BadRequest(except.Message);
            }

        }

        [HttpPost("auth")]
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
