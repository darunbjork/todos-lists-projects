import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const [newTaskText, setNewTaskText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>My To-Do List</h1>

      <p>Number of tasks: {tasks.length}</p>
      <p>Current input text: {newTaskText}</p>
    </div>
  );
}

export default App;
