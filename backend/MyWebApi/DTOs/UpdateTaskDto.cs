using System;
using System.ComponentModel.DataAnnotations;

namespace MyWebApi.DTOs
{
    public class UpdateTaskDto
    {
        [MaxLength(200)]
        public string TaskName { get; set; }

        public DateTime? DueDate { get; set; }

        [MaxLength(50)]
        public string Status { get; set; }
    }
}