
# Task Manager

Ứng dụng quản lý task cá nhân với **React (Frontend)** và **.NET Backend**. Hỗ trợ CRUD task, lọc task theo trạng thái, chỉnh sửa tên và thời gian hoàn thành.

---

## 1. Yêu cầu

- .NET 6 hoặc 7 SDK
- Node.js >= 16
- npm >= 8
- SQL Server / MySQL / PostgreSQL (tuỳ backend)
- Git

---

## 2. Cấu trúc project


.
├── backend/ # Node.js + Express backend
├── frontend/ # React frontend
└── README.md

---

## 3. Cấu hình backend

1. Vào folder `backend`:

```bash
  cd backend
  Cài các dependencies:
    npm install


Chạy backend:
dotnet run
Backend mặc định sẽ chạy ở http://localhost:5000

## 4. Cấu hình frontend

Vào folder frontend:

cd frontend

Cài dependencies:
npm install


Chạy frontend:

npm start


Frontend mặc định sẽ chạy ở http://localhost:3000 và kết nối backend http://localhost:5000.

## 5. Hướng dẫn sử dụng

Thêm task: Nhập tên task + chọn ngày giờ.

Sửa task: Nhấn nút ✏️, chỉnh sửa tên và thời gian.

Cập nhật trạng thái: Nhấn nút trạng thái ("Đang làm"/"Hoàn thành").

Xóa task: Nhấn nút 🗑️ (chỉ hiện khi task đã hoàn thành).

Lọc task: Chọn trạng thái ở dropdown phía trên bảng task.
