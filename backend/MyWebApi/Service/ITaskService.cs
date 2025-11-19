using System.Collections.Generic;
using System.Threading.Tasks;
using MyWebApi.DTOs;

namespace MyWebApi.Services
{
    public interface ITaskService
    {
        Task<IEnumerable<TaskResponseDto>> GetAllTasksAsync();
        Task<IEnumerable<TaskResponseDto>> GetTasksByStatusAsync(string status);
        Task<TaskResponseDto> GetTaskByIdAsync(int id);
        Task<TaskResponseDto> CreateTaskAsync(CreateTaskDto dto);
        Task<TaskResponseDto> UpdateTaskAsync(int id, UpdateTaskDto dto);
        Task<bool> DeleteTaskAsync(int id);
    }
}