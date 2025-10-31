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

      <p>Number of tasks: **{tasks.length}**</p>
      <p>Current text: {newTaskText}</p>
    </div>
  );
}

export default App;
