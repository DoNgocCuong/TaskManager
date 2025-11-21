# 🚀 Task Manager - Ứng dụng Quản lý Task Cá nhân

Đây là ứng dụng quản lý task cá nhân được xây dựng với **React** (Frontend) và **.NET** (Backend). Ứng dụng hỗ trợ đầy đủ các chức năng **CRUD** (Tạo, Đọc, Cập nhật, Xóa) task, cùng với khả năng lọc task theo trạng thái và chỉnh sửa chi tiết task.

---

## ✨ Tính năng chính

* **Tạo (Create)** task mới với tên và thời gian hoàn thành dự kiến.
* **Đọc (Read)** và hiển thị danh sách tất cả task.
* **Cập nhật (Update)** tên task, thời gian hoàn thành, và trạng thái (Đang làm/Hoàn thành).
* **Xóa (Delete)** task (chỉ có thể xóa các task đã hoàn thành).
* **Lọc** task theo trạng thái (Tất cả, Đang làm, Hoàn thành).

---

## 🛠️ Yêu cầu hệ thống

Để chạy và phát triển dự án này, bạn cần có các công cụ sau:

* **.NET 6 hoặc 7 SDK**
* **npm** (Phiên bản >= 8)
* **Hệ quản trị cơ sở dữ liệu:** SQL Server / MySQL / PostgreSQL (Tuỳ thuộc vào cấu hình **.NET Backend** của bạn)
* **Git**

---

---

## ⚙️ Hướng dẫn Cài đặt & Chạy

### 1. Cấu hình Backend (.NET)

Backend chịu trách nhiệm xử lý logic nghiệp vụ và tương tác với cơ sở dữ liệu.

1.  **Di chuyển** vào thư mục `backend`:
    ```bash
    cd backend
    cd MyWebApi
    ```

2.  **Khôi phục** các dependencies của .NET (nếu cần):
    ```bash
    dotnet restore
    ```

3.  **Cấu hình** chuỗi kết nối cơ sở dữ liệu trong file cấu hình tương ứng (ví dụ: `appsettings.json` để đổi Database,User và password về đúng của bạn).

4.  **Chạy** ứng dụng Backend:
    ```bash
    dotnet run
    ```
    > 💡 **Lưu ý:** Backend mặc định sẽ chạy tại địa chỉ **`http://localhost:5000`**.

### 2. Cấu hình Frontend (React)

Frontend là giao diện người dùng để tương tác với các task.

1.  **Di chuyển** vào thư mục `frontend`:
    ```bash
    cd frontend
    cd taskmanager-frontend
    ```

2.  **Cài đặt** các dependencies:
    ```bash
    npm install
    ```

3.  **Chạy** ứng dụng Frontend:
    ```bash
    npm run dev
    ```
    > 💡 **Lưu ý:** Frontend mặc định sẽ chạy tại địa chỉ **`http://localhost:3000`** và đã được cấu hình sẵn để kết nối tới Backend tại `http://localhost:5000`.

---

## 📝 Hướng dẫn sử dụng

| Hành động | Chi tiết |
| :--- | :--- |
| **Thêm task** | Nhập tên task vào ô nhập liệu và chọn ngày giờ hoàn thành dự kiến, sau đó nhấn nút Thêm. |
| **Sửa task** | Nhấn nút **✏️** (Chỉnh sửa) bên cạnh task, sau đó chỉnh sửa Tên và Thời gian hoàn thành trong form hiện ra. |
| **Cập nhật trạng thái** | Nhấn nút trạng thái (**"Đang làm"** / **"Hoàn thành"**) để chuyển đổi trạng thái của task. |
| **Xóa task** | Nhấn nút **🗑️** (Xóa). Nút này **chỉ hiển thị** khi task đã ở trạng thái **"Hoàn thành"**. |
| **Lọc task** | Sử dụng dropdown lựa chọn trạng thái task (Tất cả/Đang làm/Hoàn thành) phía trên bảng task. |

