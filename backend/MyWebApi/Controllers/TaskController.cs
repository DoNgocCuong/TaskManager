using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyWebApi.DTOs;
using MyWebApi.Services;

namespace MyWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        private readonly ITaskService _service;

        public TasksController(ITaskService service)
        {
            _service = service;
        }

        // GET: api/tasks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskResponseDto>>> GetTasks([FromQuery] string status = null)
        {
            if (string.IsNullOrEmpty(status))
            {
                var tasks = await _service.GetAllTasksAsync();
                return Ok(tasks);
            }
            else
            {
                var tasks = await _service.GetTasksByStatusAsync(status);
                return Ok(tasks);
            }
        }

        // GET: api/tasks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TaskResponseDto>> GetTask(int id)
        {
            var task = await _service.GetTaskByIdAsync(id);

            if (task == null)
                return NotFound(new { message = "Task không tồn tại" });

            return Ok(task);
        }

        // POST: api/tasks
        [HttpPost]
        public async Task<ActionResult<TaskResponseDto>> CreateTask(CreateTaskDto dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var task = await _service.CreateTaskAsync(dto);
            return CreatedAtAction(nameof(GetTask), new { id = task.Id }, task);
        }

        // PUT: api/tasks/5
        [HttpPut("{id}")]
        public async Task<ActionResult<TaskResponseDto>> UpdateTask(int id, UpdateTaskDto dto)
        {
            var task = await _service.UpdateTaskAsync(id, dto);

            if (task == null)
                return NotFound(new { message = "Task không tồn tại" });

            return Ok(task);
        }

        // DELETE: api/tasks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(int id)
        {
            var result = await _service.DeleteTaskAsync(id);

            if (!result)
                return NotFound(new { message = "Task không tồn tại" });

            return NoContent();
        }
    }
}