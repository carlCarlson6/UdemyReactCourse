using System;
using System.Threading.Tasks;
using Common.ExceptionTypes;
using Core.Models;
using Services.User;

namespace UseCases.User
{
    public class CreateNewUserUseCase
    {
        private readonly AddUserService addUserService;
        private readonly GetUserService getUserService;
        public CreateNewUserUseCase(AddUserService addUserService)
        {
            this.addUserService = addUserService;
        }

        public async Task<IUser> ExecuteUseCase(String name, String password)
        {
            try
            {
                await this.ExecuteValidations(name, password);
                return await this.addUserService.ExecuteService(name, password);
            }
            catch(Exception except)
            {
                throw new Exception(except.Message);
            }
        }

        private async Task ExecuteValidations(String userName, String password)
        {
            try 
            {
                await this.VerifyUserDoesNotExist(userName);
                this.ValidatePassword(password);
            }
            catch(Exception except)
            {
                throw new Exception(except.Message);
            }
        }

        private async Task VerifyUserDoesNotExist(String userName)
        {
            try 
            {
                IUser user = await this.getUserService.ExecuteService(userName);
                if(user != null)
                {
                    throw new Exception(ExceptionTypes.UserAlreadyExist);
                }
            }
            catch(Exception except)
            {
                if(except.Message == ExceptionTypes.UserDoesNotExist)
                {
                    return;
                }
                else
                {
                    throw new Exception(except.Message);
                }
            }
        }

        private void ValidatePassword(String password)
        {
            if(password.Length < 6)
            {
                throw new Exception(ExceptionTypes.InvalidPassword);
            }
        }
    }
}
