using System;

namespace Common.Utils
{
    public class JwtUtils
    {
        private readonly String secret;
        public JwtUtils(JwtSettings settings)
        {
            this.secret = settings.Secret;
        }

        public String CreateToken() 
        {
            throw new NotImplementedException();
        }

        public Boolean ValidateToken(String token)
        {
            throw new NotImplementedException();
        }
    }
}
