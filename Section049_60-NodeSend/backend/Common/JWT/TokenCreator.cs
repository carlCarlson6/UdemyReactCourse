using System.Text;
using System;
using Common.Utils;
using Core.Models;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace Common.JWT
{
    public class TokenCreator
    {
        private readonly String secret;
        private readonly Double expirationTime;
        public TokenCreator(JwtSettings settings)
        {
            this.secret = settings.Secret;
            this.expirationTime = settings.ExpirationTime;
        }

        public String Create(IUser user) 
        {
            byte[] bytesKey = Encoding.ASCII.GetBytes(this.secret);
            JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
            
            SecurityTokenDescriptor securityTokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Name)
                }),
                Expires = DateTime.UtcNow.AddHours(this.expirationTime),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(bytesKey), SecurityAlgorithms.HmacSha256Signature)
            };

            SecurityToken securityToken = tokenHandler.CreateToken(securityTokenDescriptor);
            String token = tokenHandler.WriteToken(securityToken);

            return token;
        }
    }
}
