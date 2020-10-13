using System;

namespace Core.Models
{
    public interface ILink
    {
        String Id { get; set; }
        String Url { get; set; }
        String FileName { get; set; }
        String OriginalFileName { get; set; }
        int NumberDownloads { get; set; }
        String Password { get; set; }
        String CreatedBy { get; set; }
        DateTime CreatedAt { get; set; }
    }
}
