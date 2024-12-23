'use client';
import React, { useState } from 'react';

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ task: '', assignedBy: '', assignedTo: '', status: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

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

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredTasks = tasks
    .filter((task) => task.task.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((task) => (filterStatus ? task.status === filterStatus : true));

  return (
    <div className="overflow-x-auto mt-5">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search Task By Name"
          value={searchTerm}
          onChange={handleSearch}
          className="px-2 py-1 md:px-4 md:py-2  text-sm md:text-lg border rounded-lg w-full max-w-md"
        />
        <select
          value={filterStatus}
          onChange={handleFilter}
          className="px-2 py-1 md:px-4 md:py-2  text-sm md:text-lg border rounded-lg"
        >
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Yet to Start">Yet to Start</option>
          <option value="Testing">Testing</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="hidden md:block">
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
            {filteredTasks.map((task, index) => (
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
                    className="px-2 py-1 md:px-4 md:py-2  text-sm md:text-lg border rounded-lg text-gray-800"
                  >
                    <option value="">Assigned By</option>
                    <option value="Kiruba">Kiruba</option>
                    <option value="siva">siva</option>
                    <option value="Logesh">Logesh</option>
                  </select>
                </td>
                <td className="px-6 py-3">
                  <select
                    value={task.assignedTo}
                    onChange={(e) => handleChange(e, task.id, 'assignedTo')}
                    className="px-2 py-1 md:px-4 md:py-2  text-sm md:text-lg border rounded-lg text-gray-800"
                  >
                    <option value="">Assigned To</option>
                    <option value="Prassana">Prassana</option>
                    <option value="Kumaran">Kumaran</option>
                    <option value="Logesh">Logesh</option>
                  </select>
                </td>
                <td className="px-6 py-3">
                  <select
                    value={task.status}
                    onChange={(e) => handleChange(e, task.id, 'status')}
                    className="px-2 py-1 md:px-4 md:py-2  text-sm md:text-lg border rounded-lg text-gray-800"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Yet to Start">Yet to Start</option>
                    <option value="Testing">Testing</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td className="px-6 py-3 flex-col space-x-3">
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
      <div className="block md:hidden">
        {filteredTasks.map((task, index) => (
          <div key={task.id} className="border rounded-lg shadow-md mb-4 p-4">
            <p><strong>S.No:</strong> {index + 1}</p>
            <p><strong>Task:</strong> {task.task}</p>
            <p><strong>Assigned By:</strong>
              <select
                value={task.assignedBy}
                onChange={(e) => handleChange(e, task.id, 'assignedBy')}
                className="px-2 py-1 md:px-4 md:py-2  text-sm md:text-lg border rounded-lg text-gray-800 w-full"
              >
                <option value="">Assigned By</option>
                <option value="Kiruba">Kiruba</option>
                <option value="siva">siva</option>
                <option value="Logesh">Logesh</option>
              </select>
            </p>
            <p><strong>Assigned To:</strong>
              <select
                value={task.assignedTo}
                onChange={(e) => handleChange(e, task.id, 'assignedTo')}
                className="px-2 py-1 md:px-4 md:py-2  text-sm md:text-lg border rounded-lg text-gray-800 w-full"
              >
                <option value="">Assigned To</option>
                <option value="Prassana">Prassana</option>
                <option value="Kumaran">Kumaran</option>
                <option value="Logesh">Logesh</option>
              </select>
            </p>
            <p><strong>Status:</strong>
              <select
                value={task.status}
                onChange={(e) => handleChange(e, task.id, 'status')}
                className="px-2 py-1 md:px-4 md:py-2  text-sm md:text-lg border rounded-lg text-gray-800 w-full"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Yet to Start">Yet to Start</option>
                <option value="Testing">Testing</option>
                <option value="Completed">Completed</option>
              </select>
            </p>
            <div className="mt-3">
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-600 hover:text-red-800 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <input
          type="text"
          placeholder="New Task"
          value={newTask.task}
          onChange={(e) => handleInputChange(e, 'task')}
          className="px-2 py-1 md:px-4 md:py-2  text-sm md:text-lg border rounded-lg mr-4"
        />
        <select
          value={newTask.assignedBy}
          onChange={(e) => handleInputChange(e, 'assignedBy')}
          className="px-2 py-1 md:px-4 md:py-2  text-sm md:text-lg border rounded-lg mr-4"
        >
          <option value="">Assigned By</option>
          <option value="Kiruba">Kiruba</option>
          <option value="siva">siva</option>
          <option value="Logesh">Logesh</option>
        </select>
        <select
          value={newTask.assignedTo}
          onChange={(e) => handleInputChange(e, 'assignedTo')}
          className="px-2 py-1 md:px-4 md:py-2  text-sm md:text-lg border rounded-lg mr-4"
        >
          <option value="">Assigned To</option>
          <option value="Prassana">Prassana</option>
          <option value="Kumaran">Kumaran</option>
          <option value="Logesh">Logesh</option>
        </select>
        <button
          onClick={handleAddTask}
          className="px-2 py-1 md:px-4 md:py-2  text-sm md:text-lg bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TaskTable;
