import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store";
import "./TaskList.css";
import { FaUserTie } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
import { MdTaskAlt } from "react-icons/md";

const TaskList = ({ todo, onEdit }) => {
  const dispatch = useDispatch(); // Redux dispatch function

  return (
    <li key={todo.id} className="taskcard">
      <h3 className="text-card-header">{todo.title}</h3>
      <p
        className={`text-card-sts ${
          todo.isCompleted ? "text-green" : "text-brown"
        }`}
      >
        {todo.isCompleted ? "Complete" : "Pending"}
      </p>

      <div className="text-card-multi-text">
        <p>
          {todo.type === "Work" ? <FaUserTie /> : <FaUser />}
          {todo.type}
        </p>
        <p>
          <FaCalendarDays /> {todo.date}
        </p>
      </div>
      <p className="text-card-content">{todo.content}</p>
      <div className="text-card-multi-btns">
        <button id={`${
          todo.isCompleted ? "brown-btn" : "green-btn"
        }`} onClick={() => dispatch(toggleTodo(todo.id))}>
          <MdTaskAlt />
          {todo.isCompleted ? "Mark as Incomplete" : "Mark as Completed"}
        </button>
        <button id="grey-btn" onClick={() => onEdit(todo)}>
          <RiEdit2Fill /> Edit
        </button>
        <button id="red-btn" onClick={() => dispatch(deleteTodo(todo.id))}>
          <RiDeleteBin6Fill /> Delete
        </button>
      </div>
    </li>
  );
};

export default TaskList;
