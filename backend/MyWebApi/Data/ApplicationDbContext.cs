using Microsoft.EntityFrameworkCore;
// Tạo alias cho class Task của model để tránh trùng với System.Threading.Tasks.Task
using TaskModel = MyWebApi.Models.Task;

namespace MyWebApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        // Constructor nhận DbContextOptions từ DI
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        // DbSet cho bảng Tasks, dùng alias TaskModel
        public DbSet<TaskModel> Tasks { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Cấu hình entity TaskModel
            modelBuilder.Entity<TaskModel>(entity =>
            {
                // Tạo index cho cột Status
                entity.HasIndex(e => e.Status);

                // Tạo index cho cột DueDate
                entity.HasIndex(e => e.DueDate);

                // Thêm cấu hình khác nếu cần
            });
        }
    }
}
