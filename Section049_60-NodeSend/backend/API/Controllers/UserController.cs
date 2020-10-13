using System;
using System.Threading.Tasks;
using API.Messages;
using API.Messages.User;
using Core.Models;
using Microsoft.AspNetCore.Mvc;
using UseCases.User;

namespace API.Controllers
{
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly CreateNewUserUseCase createNewUser;
        
        public UserController(CreateNewUserUseCase createNewUserUseCase)
        {
            this.createNewUser = createNewUserUseCase;
        }

        [HttpPost]
        public async Task<ActionResult<AddUserResponse>> AddUser([FromBody] AddUserRequest request) 
        {
            try
            {
                IUser createdUser = await this.createNewUser.ExecuteUseCase(request.Name, request.Password);
                
                return new AddUserResponse(createdUser.Id);
            }
            catch(Exception except)
            {
                return BadRequest(except.Message);
            }

        }


    }
}
