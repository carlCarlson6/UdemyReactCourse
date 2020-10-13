using System;
using System.Threading.Tasks;
using Core.Models;
using Core.Repository;

namespace Services.User
{
    public class GetUserService
    {
        private readonly IRepository<IUser> userRepo;
        public GetUserService(IRepository<IUser> userRepo)
        {
            this.userRepo = userRepo;
        }

        public async Task<IUser> ExecuteService(String userName)
        {
            try 
            {
                IUser user = await this.userRepo.Read(userName);

                if(user == null)
                {
                    throw new Exception("user does not exist");
                }            

                return user;
            }
            catch(Exception except)
            {
                throw new Exception(except.Message);
            }
            
        }
    }
}
