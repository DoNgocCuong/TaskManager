// src/api/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Thay đổi URL theo backend của bạn

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Task API
export const taskAPI = {
    // Lấy tất cả tasks
    getAllTasks: () => api.get('/tasks'),

    // Lấy task theo id
    getTaskById: (id) => api.get(`/tasks/${id}`),

    // Tạo task mới
    createTask: (taskData) => api.post('/tasks', taskData),

    // Cập nhật task
    updateTask: (id, taskData) => api.put(`/tasks/${id}`, taskData),

    // Xóa task
    deleteTask: (id) => api.delete(`/tasks/${id}`),

    // Lọc tasks theo trạng thái
    getTasksByStatus: (status) => api.get(`/tasks/status/${status}`),
};

export default api;