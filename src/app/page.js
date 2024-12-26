// pages/index.js
'use client'
import TaskTable from './components/TaskTable';
import './globals.css'
// import { getUsers } from '../../utilis/users';
import { useEffect } from 'react';
// import AuthPage from './auth';
export default function Home() {
  const tasks = [
    {
      id: 1,
      task: 'Design Homepage',
      assignedBy: 'John Doe',
      assignedTo: 'Alice Smith',
      status: 'In Progress',
    },
    {
      id: 2,
      task: 'Develop Backend API',
      assignedBy: 'Alice Smith',
      assignedTo: 'Bob Johnson',
      status: 'Completed',
    },
    {
      id: 3,
      task: 'Create Database Schema',
      assignedBy: 'Bob Johnson',
      assignedTo: 'Charlie Brown',
      status: 'Not Started',
    },
  ];

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-red-600 ">Task Manager</h1>
      <TaskTable tasks={tasks} />
      {/* <AuthPage/> */}
    </div>
  );
}
