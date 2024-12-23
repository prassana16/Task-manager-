// components/TaskTable.js
'use client';
import React, { useState } from 'react';

const TaskTable = ({ tasks }) => {
  const [assignedTo, setAssignedTo] = useState('');
  const [assignedBy, setAssignedBy] = useState('');

  const handleAssignToChange = (e) => {
    setAssignedTo(e.target.value);
  };

  const handleAssignByChange = (e) => {
    setAssignedBy(e.target.value);
  };

  const handleAddTask = () => {
    // Logic for adding a new task (could open a modal or redirect to a form)
    alert('Add task functionality coming soon!');
  };

  const handleEditTask = (id) => {
    // Logic for editing a task
    alert(`Editing task with ID: ${id}`);
  };

  const handleDeleteTask = (id) => {
    // Logic for deleting a task
    alert(`Deleting task with ID: ${id}`);
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
        <div className="flex space-x-4">
          <select
            value={assignedBy}
            onChange={handleAssignByChange}
            className="px-4 py-2 border rounded-lg text-gray-800"
          >
            <option value="">Assigned By</option>
            <option value="John Doe">John Doe</option>
            <option value="Alice Smith">Alice Smith</option>
            <option value="Bob Johnson">Bob Johnson</option>
          </select>
          <select
            value={assignedTo}
            onChange={handleAssignToChange}
            className="px-4 py-2 border rounded-lg text-gray-800"
          >
            <option value="">Assigned To</option>
            <option value="Charlie Brown">Charlie Brown</option>
            <option value="David Lee">David Lee</option>
            <option value="Ella Green">Ella Green</option>
          </select>
        </div>
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
              <td className="px-6 py-3">{task.task}</td>
              <td className="px-6 py-3">{task.assignedBy}</td>
              <td className="px-6 py-3">{task.assignedTo}</td>
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
                  onClick={() => handleEditTask(task.id)}
                  className="text-blue-600 hover:text-blue-800 transition-all"
                >
                  Edit
                </button>
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
    </div>
  );
};

export default TaskTable;
