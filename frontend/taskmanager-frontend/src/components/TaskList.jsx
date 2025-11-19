// src/components/TaskList.jsx
import { useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdateStatus, onDelete, onEdit }) => {
    const [filter, setFilter] = useState('all');

    const getFilteredTasks = () => {
        switch (filter) {
            case 'doing':
                return tasks.filter(task => task.status === 'Đang làm');
            case 'done':
                return tasks.filter(task => task.status === 'Hoàn thành');
            default:
                return tasks;
        }
    };

    const filteredTasks = getFilteredTasks();

    return (
        <div className="task-list-container">
            <div className="filter-container">
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="filter-select"
                >
                    <option value="all">Tất cả</option>
                    <option value="doing">Đang làm</option>
                    <option value="done">Hoàn thành</option>
                </select>
            </div>

            <table className="task-table">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Due-date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTasks.length === 0 ? (
                        <tr>
                            <td colSpan="3" className="no-tasks">
                                Không có task nào
                            </td>
                        </tr>
                    ) : (
                        filteredTasks.map(task => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onUpdateStatus={onUpdateStatus}
                                onDelete={onDelete}
                                onEdit={onEdit}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;