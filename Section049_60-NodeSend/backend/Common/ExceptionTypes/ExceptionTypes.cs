using System;

namespace Common.ExceptionTypes
{
    public static class ExceptionTypes
    {
        public static String UserDoesNotExist { get { return "user does not exist"; } }
        public static String UserAlreadyExist { get { return "user does not exist"; } }
        public static String InvalidPassword { get { return "password is not valid"; } }
        public static String IncorrectPassword { get { return "incorrect password"; } }
        public static String NumberDownloadsLessThanOne { get { return "number of downloads can not be less than one"; } }
    }
}
