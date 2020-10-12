using System;

namespace API.Messages.User
{
    public class AddUserResponse
    {
        public String UserId {get; set;}

        public AddUserResponse(String id)
        {
            this.UserId = id;
        }
    }
}
