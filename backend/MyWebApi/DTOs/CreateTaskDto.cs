using System;
using System.ComponentModel.DataAnnotations;

namespace MyWebApi.DTOs
{
    public class CreateTaskDto
    {
        [Required(ErrorMessage = "Tên task là bắt buộc")]
        [MaxLength(200, ErrorMessage = "Tên task không được vượt quá 200 ký tự")]
        public string TaskName { get; set; }

        public DateTime? DueDate { get; set; }
    }
}