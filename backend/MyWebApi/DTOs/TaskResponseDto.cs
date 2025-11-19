using System;

namespace MyWebApi.DTOs
{
    public class TaskResponseDto
    {
        public int Id { get; set; }
        public string TaskName { get; set; }
        public DateTime? DueDate { get; set; }
        public string Status { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}