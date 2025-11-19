using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyWebApi.DTOs;
using MyWebApi.Repositories;

namespace MyWebApi.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository _repository;

        public TaskService(ITaskRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<TaskResponseDto>> GetAllTasksAsync()
        {
            var tasks = await _repository.GetAllTasksAsync();
            return tasks.Select(MapToDto);
        }

        public async Task<IEnumerable<TaskResponseDto>> GetTasksByStatusAsync(string status)
        {
            var tasks = await _repository.GetTasksByStatusAsync(status);
            return tasks.Select(MapToDto);
        }

        public async Task<TaskResponseDto> GetTaskByIdAsync(int id)
        {
            var task = await _repository.GetTaskByIdAsync(id);
            return task != null ? MapToDto(task) : null;
        }

        public async Task<TaskResponseDto> CreateTaskAsync(CreateTaskDto dto)
        {
            var task = new Models.Task
            {
                TaskName = dto.TaskName,
                DueDate = dto.DueDate,
                Status = "Đang làm",
                CreatedAt = DateTime.Now
            };

            var created = await _repository.CreateTaskAsync(task);
            return MapToDto(created);
        }

        public async Task<TaskResponseDto> UpdateTaskAsync(int id, UpdateTaskDto dto)
        {
            var task = await _repository.GetTaskByIdAsync(id);
            if (task == null)
                return null;

            if (!string.IsNullOrEmpty(dto.TaskName))
                task.TaskName = dto.TaskName;

            if (dto.DueDate.HasValue)
                task.DueDate = dto.DueDate;

            if (!string.IsNullOrEmpty(dto.Status))
                task.Status = dto.Status;

            var updated = await _repository.UpdateTaskAsync(task);
            return MapToDto(updated);
        }

        public async Task<bool> DeleteTaskAsync(int id)
        {
            return await _repository.DeleteTaskAsync(id);
        }

        private TaskResponseDto MapToDto(Models.Task task)
        {
            return new TaskResponseDto
            {
                Id = task.Id,
                TaskName = task.TaskName,
                DueDate = task.DueDate,
                Status = task.Status,
                CreatedAt = task.CreatedAt
            };
        }
    }
}