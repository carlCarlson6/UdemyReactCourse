using System;

namespace Common.Utils
{
    public class JwtSettings
    {
        public String Secret { get; set; }
        public Double ExpirationTime { get; set; }
    }
}
