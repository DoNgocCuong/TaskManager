using System;
using System.ComponentModel.DataAnnotations;

namespace MyWebApi.Models
{
    public class Task
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(200)]
        public string TaskName { get; set; }

        public DateTime? DueDate { get; set; }

        [Required]
        [MaxLength(50)]
        public string Status { get; set; } = "Đang làm";

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public DateTime? UpdatedAt { get; set; }
    }
}