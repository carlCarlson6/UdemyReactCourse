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

        public UserController(AddUserService addUserService)
        {
            this.addUserService = addUserService;
        }

        [HttpPost]
        public async Task<ActionResult<AddUserResponse>> AddUser([FromBody] AddUserRequest request) 
        {
            try
            {
                IUser createdUser = await this.addUserService.ExecuteService(request.Name, request.Password);
                AddUserResponse response = new AddUserResponse() { UserId=createdUser.Id };
                return response;
            }
            catch(Exception except)
            {
                return BadRequest(except.Message);
            }

        }
    }
}
