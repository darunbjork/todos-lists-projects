import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = () => {
    if (newTaskText.trim() === "") {
      return;
    }

    const newId = Date.now();
    const newTask = {
      id: newId,
      text: newTaskText,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>My To-Do List</h1>

      <div>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTaskText}
          onChange={(event) => setNewTaskText(event.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <hr />

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              border: "1px solid #eee",
              padding: "10px",
              margin: "5px 0",
              borderRadius: "4px",
            }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
