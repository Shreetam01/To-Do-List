import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../store';
import "./TaskInput.css"

const TaskInput = ({ closeForm, task }) => {
  const [title, setTitle] = useState(task ? task.title : '');
  const [content, setContent] = useState(task ? task.content : '');
  const [type, setType] = useState(task ? task.type : 'Personal');
  const [date, setDate] = useState(task ? task.date : '');
  const dispatch = useDispatch();

  // Set default date if creating a new task
  useEffect(() => {
    if (!task) {
      const currentDate = new Date();
      const formattedDate = currentDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
      setDate(formattedDate);
    }
  }, [task]);

  // Handle form submission (add or update task)
  const handleSubmit = () => {
    if (title.trim() && content.trim()) {
      const newTask = {
        id: task ? task.id : Date.now(),
        title,
        content,
        type,
        date,
        isCompleted: task ? task.isCompleted : false
      };

      // Dispatch action based on task existence
      if (task) {
        dispatch(updateTodo(newTask));
      } else {
        dispatch(addTodo(newTask));
      }

      closeForm();
    }
  };

  return (
    <div className="bg">
      <div className="task-form">
        <div className="task-form-content">
          <h2>{task ? 'Edit Task' : 'Add New Task'}</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <div className="multibtn">
            <label>
              <input
                type="radio"
                value="Personal"
                checked={type === 'Personal'}
                onChange={e => setType(e.target.value)}
              />
              Personal
            </label>
            <label>
              <input
                type="radio"
                value="Work"
                checked={type === 'Work'}
                onChange={e => setType(e.target.value)}
              />
              Work
            </label>
          </div>
          <div className="multi-form-btn">
            <button id="green-btn" onClick={handleSubmit}>
              {task ? 'Save Changes' : 'Add Task'}
            </button>
            <button id="red-btn" onClick={closeForm}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInput;
