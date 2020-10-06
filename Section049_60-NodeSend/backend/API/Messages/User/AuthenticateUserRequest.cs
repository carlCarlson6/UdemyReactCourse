using System;

namespace API.Messages.User
{
    public class AuthenticateUserRequest
    {
        public String UserName {get; set;}
        public String Password {get; set;}
    }
}
