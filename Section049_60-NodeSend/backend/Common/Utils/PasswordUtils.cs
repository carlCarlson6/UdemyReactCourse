using System;
using System.Security.Cryptography;

namespace Common.Utils
{
    public class PasswordUtils
    {
        public String EncryptPassword(string password) {
            byte[] salt;
            new RNGCryptoServiceProvider().GetBytes(salt = new byte[16]);

            var keyDerevationFn = new Rfc2898DeriveBytes(password, salt, 100000);
            byte[] hash = keyDerevationFn.GetBytes(20);
            
            byte[] hashBytes = new byte[36];
            Array.Copy(salt, 0, hashBytes, 0, 16);
            Array.Copy(hash, 0, hashBytes, 16, 20);

            String hashedPassword = Convert.ToBase64String(hashBytes);

            return hashedPassword;
        }

        public Boolean VerifyPassword(String password, String hashedPassword) {
            byte[] hashedPasswordBytes = Convert.FromBase64String(hashedPassword);
            byte[] salt = new byte[16];
            Array.Copy(hashedPasswordBytes, 0, salt, 0, 16);
            var pbkdf2 = new Rfc2898DeriveBytes(password, salt, 100000);
            byte[] hash = pbkdf2.GetBytes(20);
            
            for (int i=0; i < 20; i++)
                if (hashedPasswordBytes[i+16] != hash[i])
                    return false;
            
            return true;
        }   
    }
}
