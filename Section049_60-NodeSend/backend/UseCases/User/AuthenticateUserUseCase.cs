using System.Collections.Generic;
using System;
using Services.User;
using System.Threading.Tasks;
using Core.Models;

namespace UseCases.User
{
    public class AuthenticateUserUseCase
    {
        private readonly GetUserService getUserService;
        private readonly AuthenticateUserService authenticateUserService;
        public AuthenticateUserUseCase(GetUserService getUserService, AuthenticateUserService authenticateUserService)
        {
            this.getUserService = getUserService;
            this.authenticateUserService = authenticateUserService;
        }

        public async Task<Dictionary<String, String>> ExecuteUseCase(String inputUserName, String inputPassword)
        {
            try
            {
                IUser user = await this.getUserService.ExecuteService(inputUserName);
                String token = this.authenticateUserService.ExecuteService(user, inputPassword);
                return new Dictionary<String, String>{ {"UserId", user.Id}, {"Token", token} };
            }
            catch(Exception except)
            {
                throw new Exception(except.Message);
            }
        }
    }
}
