import { createSlice, configureStore } from '@reduxjs/toolkit';

// Function to fetch tasks from local storage
const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

// Function to save tasks to local storage
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const initialState = loadTasksFromLocalStorage();

// Create a slice for tasks with initial state and reducers
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    // Reducer to add a new task
    addTodo: (state, action) => {
      state.push(action.payload);
      saveTasksToLocalStorage(state);
    },
    // Reducer to toggle the completion status of a task
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
        saveTasksToLocalStorage(state);
      }
    },
    // Reducer to delete a task
    deleteTodo: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        saveTasksToLocalStorage(state);
      }
    },
    // Reducer to update a task
    updateTodo: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
        saveTasksToLocalStorage(state);
      }
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } = tasksSlice.actions;
export default configureStore({ reducer: { todos: tasksSlice.reducer } });
