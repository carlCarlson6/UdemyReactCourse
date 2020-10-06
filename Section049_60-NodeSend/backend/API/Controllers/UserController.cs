using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Services.User;

namespace API.Controllers
{
    public class UserController : ControllerBase
    {
        private readonly AddUserService addUserService;

        public UserController(AddUserService addUserService)
        {
            this.addUserService = addUserService;
        }

        [HttpPost]
        public Task<ActionResult> AddUser() 
        {
            throw new NotImplementedException();
        }
    }
}
