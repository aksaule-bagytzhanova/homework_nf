export default function TaskItem({ task, onToggle, onDelete }) {
    return (
      <li>
        <span
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          onClick={onToggle}
        >
          {task.text}
        </span>
        <button onClick={onDelete}>Delete</button>
      </li>
    );
  }
  