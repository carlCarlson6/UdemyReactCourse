using System;

namespace API.Messages.User
{
    public class AuthenticateUserRequest
    {
        public String Name {get; set;}
        public String Password {get; set;}
    }
}
