import { useState, useEffect } from "react";
import "./TodoListApp.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import confetti from "canvas-confetti";

function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [deletedTodos, setDeletedTodos] = useState([]);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editingTodoText, setEditingTodoText] = useState("");
  const [editingTodoDescription, setEditingTodoDescription] = useState("");
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");
  const [category, setCategory] = useState("work");
  const [percentage, setPercentage] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [showCompletedMessage, setShowCompletedMessage] = useState(false);
  const [completedMessage, setCompletedMessage] = useState("");

  const completedMessages = [
    "Great job! Keep up the good work. \u{1F44F}",
    "You're crushing it! \u{1F525}",
    "Fantastic! Another task completed. \u{1F389}",
    "One step closer to your goal. \u{1F680}",
    "Amazing! You're making progress. \u{1F44C}",
    "Excellent! Let's keep going. \u{1F3C6}",
    "You're doing great! Don't give up now. \u{1F4AA}",
    "Keep pushing! You've got this. \u{1F4AA}",
    "Incredible! Keep up the momentum. \u{1F4AF}",
    "Awesome work! Celebrate your success. \u{1F389}",
  ];

  useEffect(() => {
    if (showCompletedMessage) {
      setTimeout(() => {
        setShowCompletedMessage(false);
      }, 2000);
    }
  }, [showCompletedMessage]);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  const handleAddTodo = () => {
    const currentDate = new Date().toISOString().slice(0, 10);
    if (newTodo !== "") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo,
          description,
          done: false,
          task,
          category,
          dueDate: dueDate || currentDate, // assign current date if dueDate is empty
          priority,
          progress: 0,
        },
      ]);
      setNewTodo("");
      setTask("");
      setDescription("");
      setDueDate("");
      setPriority("low");
    }
  };

  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    const deletedTodo = todos.find((todo) => todo.id === id);
    setTodos(filteredTodos);
    setDeletedTodos([...deletedTodos, deletedTodo]);
  };

  const handleMarkDone = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          done: !todo.done,
          disabled: true,
        };
      }
      return todo;
    });
    const randomCompletedMessage =
      completedMessages[Math.floor(Math.random() * completedMessages.length)];
    setTodos(updatedTodos);
    if (updatedTodos.find((todo) => todo.id === todoId).done) {
      generateConfetti();
      setCompletedMessage(randomCompletedMessage);
      setShowCompletedMessage(true);
    }
  };

  const handleUndoDelete = () => {
    const lastDeletedTodo = deletedTodos.pop();
    setDeletedTodos([...deletedTodos]);
    setTodos([...todos, lastDeletedTodo]);
  };

  const handleCancelEditingText = () => {
    const todo = todos.find((todo) => todo.id === editingTodoId);
    if (todo) {
      setEditingTodoText(todo.text);
      setEditingTodoDescription(todo.description);
    }
    setEditingTodoId(null);
  };

  const handleDoneEdit = () => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editingTodoId
        ? {
            ...todo,
            text: editingTodoText,
            description: editingTodoDescription,
          }
        : todo
    );
    setTodos(updatedTodos);
    setEditingTodoId(null);
    setEditingTodoText("");
    setEditingTodoDescription("");
  };

  const handlePercentageChange = (event) => {
    const newPercentage = parseInt(event.target.value);
    setPercentage(newPercentage);
  };

  const generateConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  };

  return (
    <>
      <div className="todo-list-container">
        <div className="todo-container right-side">
          <div className="todo-header">
            <h3 className="header-heading">New Task Todo</h3>
            <label className="header-label-task">Task</label>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add Task.."
            />
          </div>
          <div className="todo-body">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add Descriptions.."
            />
            <label className="due-date-icon">Due date</label>

            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              placeholder="yy/mm//dd"
              className="date-input"
            />
            <label>Priority</label>
            <div className="priority-buttons">
              <button
                className={`priority-button ${
                  priority === "low" ? "selected low-priority" : ""
                }`}
                onClick={() => setPriority("low")}
              >
                Low
              </button>
              <button
                className={`priority-button ${
                  priority === "medium" ? "selected medium-priority" : ""
                }`}
                onClick={() => setPriority("medium")}
              >
                Medium
              </button>
              <button
                className={`priority-button ${
                  priority === "high" ? "selected high-priority" : ""
                }`}
                onClick={() => setPriority("high")}
              >
                High
              </button>
            </div>
            <div className="category-todo">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="shopping">Shopping</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className="todo-cancel-add-btn">
              <button className="todo-add-btn" onClick={handleAddTodo}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className={`todo-item${todo.done ? " done" : ""}`}>
            <div className="todo-item-header">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onClick={() => handleMarkDone(todo.id)}
                  disabled={todo.disabled}
                  onChange={handleCheck}
                />
                <svg viewBox="0 0 12 12" className="checkbox-icon">
                  {todo.done ? (
                    <path d="M1 6.5L4.5 10L11 1" />
                  ) : (
                    <path d="none" />
                  )}
                </svg>
              </label>
              <div className="todo-item-text">
                {showCompletedMessage && (
                  <div className="overlay">
                    <div className="message">
                      <p>{completedMessage}</p>
                    </div>
                  </div>
                )}
                <p
                  className="todo-item-task-text"
                  style={{
                    textDecoration: isChecked ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </p>
                <p
                  className="due-date-text"
                  style={{
                    textDecoration: isChecked ? "line-through" : "none",
                  }}
                >
                  {todo.dueDate}
                </p>
              </div>
              <div className="todo-item-actions">
                <button
                  className="todo-edit-button"
                  onClick={() => setEditingTodoId(todo.id)}
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  className="todo-delete-button"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
            {editingTodoId === todo.id ? (
              <div className="todo-item-edit">
                <input
                  type="text"
                  value={editingTodoText}
                  onChange={(e) => setEditingTodoText(e.target.value)}
                  placeholder="Task"
                />
                <textarea
                  value={editingTodoDescription}
                  onChange={(e) => setEditingTodoDescription(e.target.value)}
                  placeholder="Task description"
                />
                <button
                  className="todo-edit-btn-cancel"
                  onClick={handleCancelEditingText}
                >
                  Cancel
                </button>
                <button className="todo-edit-btn-done" onClick={handleDoneEdit}>
                  Done
                </button>
              </div>
            ) : (
              <div className="todo-item-body">
                <p className="category-button-form">
                  <span className={`priority-todo ${todo.priority}`}>
                    {todo.priority}
                  </span>
                  <span className={`category-todo ${todo.category}`}>
                    {todo.category}
                  </span>
                </p>
                <div className="descriptions-todo-container">
                  <p className="descriptions-todo-form">
                    <strong>Description</strong> {todo.description}
                  </p>
                </div>
                {todo.done ? (
                  <p>
                    Progress: <span className="progress-100">100%</span>
                  </p>
                ) : (
                  <div className="progress-container">
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                      styles={buildStyles({
                        textColor: "#fff",
                        pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                        trailColor: "#d6d6d6",
                        backgroundColor: "#3e98c7",
                      })}
                    />
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={percentage}
                      onChange={handlePercentageChange}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {deletedTodos.length > 0 ? (
        <div className="undo-delete">
          <button className="undo-button" onClick={handleUndoDelete}>
            Undo delete ({deletedTodos.length})
          </button>
        </div>
      ) : null}
    </>
  );
}
export default TodoList;
