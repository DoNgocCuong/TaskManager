import { useState, useEffect } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import EditTaskModal from '../components/EditTaskModal';
import { taskAPI } from '../api/api';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingTask, setEditingTask] = useState(null); // task đang chỉnh sửa

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            setLoading(true);
            const response = await taskAPI.getAllTasks();
            setTasks(response.data);
            setError(null);
        } catch (err) {
            setError('Không thể tải danh sách tasks');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleEditTask = (task) => setEditingTask(task);

    const handleSaveTask = async (updatedTask) => {
        try {
            const response = await taskAPI.updateTask(updatedTask.id, updatedTask);
            setTasks(tasks.map(t => t.id === updatedTask.id ? response.data : t));
            setError(null);
        } catch (err) {
            setError('Không thể cập nhật task');
            console.error(err);
        }
    };

    return (
        <div className="home-container">
            <div className="task-manager-card">
                <h1 className="title">QUẢN LÝ TASK CÁ NHÂN</h1>
                {error && <div className="error-message">{error}</div>}

                <TaskForm onAddTask={async (newTask) => {
                    const res = await taskAPI.createTask(newTask);
                    setTasks([...tasks, res.data]);
                }} />

                <TaskList
                    tasks={tasks}
                    onUpdateStatus={async (id) => {
                        const task = tasks.find(t => t.id === id);
                        const updated = { ...task, status: task.status === 'Đang làm' ? 'Hoàn thành' : 'Đang làm' };
                        const res = await taskAPI.updateTask(id, updated);
                        setTasks(tasks.map(t => t.id === id ? res.data : t));
                    }}
                    onDelete={async (id) => {
                        await taskAPI.deleteTask(id);
                        setTasks(tasks.filter(t => t.id !== id));
                    }}
                    onEdit={handleEditTask}
                />
            </div>

            {editingTask && (
                <EditTaskModal
                    task={editingTask}
                    onClose={() => setEditingTask(null)}
                    onSave={handleSaveTask}
                />
            )}
        </div>
    );
};

export default Home;
