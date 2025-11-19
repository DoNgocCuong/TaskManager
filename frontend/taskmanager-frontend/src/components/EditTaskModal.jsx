import { useState } from 'react';
import '../App.css'; // CSS modal chung

const EditTaskModal = ({ task, onClose, onSave }) => {
    const [taskName, setTaskName] = useState(task.taskName);
    const [dueDate, setDueDate] = useState(task.dueDate ? task.dueDate.slice(0, 16) : '');

    const handleSave = () => {
        if (!taskName.trim()) {
            alert('Vui lòng nhập tên task!');
            return;
        }
        onSave({
            ...task,
            taskName: taskName.trim(),
            dueDate: dueDate ? new Date(dueDate).toISOString() : null
        });
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2>Chỉnh sửa Task</h2>
                <div className="modal-form">
                    <input
                        type="text"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                        placeholder="Tên task"
                    />
                    <input
                        type="datetime-local"
                        value={dueDate}
                        onChange={(e) => setDueDate(e.target.value)}
                    />
                </div>
                <div className="modal-buttons">
                    <button className="cancel-btn" onClick={onClose}>Hủy</button>
                    <button className="save-btn" onClick={handleSave}>Lưu</button>
                </div>
            </div>
        </div>
    );
};

export default EditTaskModal;
