using System;

namespace API.Messages.Link
{
    public class AddLinkRequest
    {
        public String FileName { get; set; }
        public String OriginalFileName { get; set; }
        public int NumberDownloads { get; set; }
        public String Password { get; set; }
        public String CreatedBy { get; set; }
    }
}
