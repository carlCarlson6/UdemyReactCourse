using System;

namespace API.Messages.User
{
    public class AuthenticateUserResponse
    {
        public String UserId { get; set; }
        public String AuthToken { get; set; }
 
        public AuthenticateUserResponse(String id, String token)
        {
            this.UserId = id;
            this.AuthToken = token;
        }
    }
}
