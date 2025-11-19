// src/components/TaskForm.jsx
import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!taskName.trim()) {
            alert('Vui lòng nhập tên task!');
            return;
        }

        // Chuẩn hóa dữ liệu gửi tới backend
        const newTask = {
            taskName: taskName.trim(),
            dueDate: dueDate ? new Date(dueDate).toISOString() : null, // backend nhận DateTime?
        };

        // Gọi callback từ parent
        onAddTask(newTask);

        // Reset form
        setTaskName('');
        setDueDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <div className="form-inputs">
                <input
                    type="text"
                    placeholder="Tên task"
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="task-input"
                />
                <input
                    type="datetime-local"
                    placeholder="Ngày & giờ"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="date-input"
                />
                <button type="submit" className="add-btn">
                    Thêm
                </button>
            </div>
        </form>
    );
};

export default TaskForm;
