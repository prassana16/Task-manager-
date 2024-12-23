'use client';
import React, { useState } from 'react';

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ task: '', assignedBy: '', assignedTo: '', status: '' });

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      { id: Date.now(), task: newTask.task, assignedBy: newTask.assignedBy, assignedTo: newTask.assignedTo, status: 'Pending' },
    ]);
    setNewTask({ task: '', assignedBy: '', assignedTo: '', status: '' });
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleInputChange = (e, field) => {
    setNewTask({
      ...newTask,
      [field]: e.target.value,
    });
  };

  const handleChange = (e, id, field) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, [field]: e.target.value } : task
      )
    );
  };

  return (
    <div className="overflow-x-auto mt-5">
      <div className="flex justify-between mb-4">
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Add Task
        </button>
      </div>
      <table className="task-table min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-6 py-3 text-left">S.No</th>
            <th className="px-6 py-3 text-left">Task</th>
            <th className="px-6 py-3 text-left">Assigned By</th>
            <th className="px-6 py-3 text-left">Assigned To</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th className="px-6 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id} className="border-b hover:bg-gray-100 transition-all">
              <td className="px-6 py-3">{index + 1}</td>
              <td className="px-6 py-3">
                <input
                  type="text"
                  value={task.task}
                  onChange={(e) => handleChange(e, task.id, 'task')}
                  className="border rounded px-2 py-1 w-full"
                />
              </td>
              <td className="px-6 py-3">
                <select
                  value={task.assignedBy}
                  onChange={(e) => handleChange(e, task.id, 'assignedBy')}
                  className="px-4 py-2 border rounded-lg text-gray-800"
                >
                  <option value="">Assigned By</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Alice Smith">Alice Smith</option>
                  <option value="Bob Johnson">Bob Johnson</option>
                </select>
              </td>
              <td className="px-6 py-3">
                <select
                  value={task.assignedTo}
                  onChange={(e) => handleChange(e, task.id, 'assignedTo')}
                  className="px-4 py-2 border rounded-lg text-gray-800"
                >
                  <option value="">Assigned To</option>
                  <option value="Charlie Brown">Charlie Brown</option>
                  <option value="David Lee">David Lee</option>
                  <option value="Ella Green">Ella Green</option>
                </select>
              </td>
              <td className="px-6 py-3">
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    task.status === 'Completed'
                      ? 'bg-green-200 text-green-800'
                      : task.status === 'In Progress'
                      ? 'bg-yellow-200 text-yellow-800'
                      : 'bg-red-200 text-red-800'
                  }`}
                >
                  {task.status}
                </span>
              </td>
              <td className="px-6 py-3 flex space-x-3">
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="text-red-600 hover:text-red-800 transition-all"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-5">
        <input
          type="text"
          placeholder="New Task"
          value={newTask.task}
          onChange={(e) => handleInputChange(e, 'task')}
          className="px-4 py-2 border rounded-lg mr-4"
        />
        <select
          value={newTask.assignedBy}
          onChange={(e) => handleInputChange(e, 'assignedBy')}
          className="px-4 py-2 border rounded-lg mr-4"
        >
          <option value="">Assigned By</option>
          <option value="John Doe">John Doe</option>
          <option value="Alice Smith">Alice Smith</option>
          <option value="Bob Johnson">Bob Johnson</option>
        </select>
        <select
          value={newTask.assignedTo}
          onChange={(e) => handleInputChange(e, 'assignedTo')}
          className="px-4 py-2 border rounded-lg mr-4"
        >
          <option value="">Assigned To</option>
          <option value="Charlie Brown">Charlie Brown</option>
          <option value="David Lee">David Lee</option>
          <option value="Ella Green">Ella Green</option>
        </select>
      </div>
    </div>
  );
};

export default TaskTable;
