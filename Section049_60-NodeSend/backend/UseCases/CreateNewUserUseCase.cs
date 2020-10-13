using System;
using System.Threading.Tasks;
using Core.Models;
using Services.User;

namespace UseCases
{
    public class CreateNewUserUseCase
    {
        private readonly AddUserService addUserService;
        public CreateNewUserUseCase(AddUserService addUserService)
        {
            this.addUserService = addUserService;
        }

        public async Task<IUser> ExecuteUseCase(String name, String password)
        {
            try
            {
                return await this.addUserService.ExecuteService(name, password);
            }
            catch(Exception except)
            {
                throw new Exception(except.Message);
            }
        }
    }
}
