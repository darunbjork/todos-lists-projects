import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");

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
        <button>Add Task</button>
      </div>
      <hr />
      <p>Current input text: **"{newTaskText}"**</p>
    </div>
  );
}

export default App;
