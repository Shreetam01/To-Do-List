import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { HiOutlineDocumentAdd } from 'react-icons/hi';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const todos = useSelector(state => state.todos); // Selector to retrieve tasks from Redux store

  // Function to open the task form
  const openForm = (task = null) => {
    setCurrentTask(task);
    setIsFormOpen(true);
  };

  // Function to close the task form
  const closeForm = () => {
    setCurrentTask(null);
    setIsFormOpen(false);
  };

  return (
    <div className={`App ${isFormOpen ? 'blur-background' : ''}`}>
      <div className="nav">
        <h1>Todo List</h1>
        <button onClick={() => openForm()}>
          <HiOutlineDocumentAdd /> Add New Task
        </button>
      </div>
      {isFormOpen && (
        <div className="taskform-container">
          <TaskInput closeForm={closeForm} task={currentTask} />
        </div>
      )}
      <div className="textcard-container">
        {todos.map(todo => (
          <TaskList key={todo.id} todo={todo} onEdit={openForm} />
        ))}
      </div>
    </div>
  );
}

export default App;
