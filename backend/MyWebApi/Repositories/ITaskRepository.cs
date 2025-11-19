using System.Collections.Generic;
using System.Threading.Tasks;
using MyWebApi.Models;

namespace MyWebApi.Repositories
{
    public interface ITaskRepository
    {
        Task<IEnumerable<Models.Task>> GetAllTasksAsync();
        Task<IEnumerable<Models.Task>> GetTasksByStatusAsync(string status);
        Task<Models.Task> GetTaskByIdAsync(int id);
        Task<Models.Task> CreateTaskAsync(Models.Task task);
        Task<Models.Task> UpdateTaskAsync(Models.Task task);
        Task<bool> DeleteTaskAsync(int id);
    }
}