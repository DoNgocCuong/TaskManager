// src/components/TaskItem.jsx
const TaskItem = ({ task, onUpdateStatus, onDelete, onEdit }) => {
    const formatDate = (dateString) => {
        if (!dateString) return '—';
        const date = new Date(dateString);
        // Hiển thị cả ngày, giờ, phút
        return date.toLocaleString('vi-VN', {
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusClass = (status) => {
        return status === 'Đang làm' ? 'status-doing' : 'status-done';
    };

    const getStatusText = (status) => {
        return status === 'Đang làm' ? 'Đang làm' : 'Hoàn thành';
    };

    return (
        <tr className="task-item">
            <td className="task-name">{task.taskName}</td>
            <td className="task-date">{formatDate(task.dueDate)}</td>
            <td className="task-status">
                <button
                    className={`status-badge ${getStatusClass(task.status)}`}
                    onClick={() => onUpdateStatus(task.id)}
                >
                    {getStatusText(task.status)}
                </button>
                <div className="task-actions">
                    <button
                        className="edit-btn"
                        onClick={() => onEdit(task)}
                        title="Sửa"
                    >
                        ✏️
                    </button>
                    {task.status === 'Hoàn thành' && (
                        <button
                            className="delete-btn"
                            onClick={() => onDelete(task.id)}
                            title="Xóa"
                        >
                            🗑️
                        </button>
                    )}
                </div>
            </td>
        </tr>
    );
};

export default TaskItem;
