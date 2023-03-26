import { useState } from "react";
import "./styles/App.css";

let nextId = 3;

function App() {
  const defaultTasks = [
    { body: "kill them all", id: 1, done: false },
    { body: "Destroy the world", id: 2, done: false },
    { body: "Be the best version of yourself", id: 3, done: false },
  ];

  const [defaultTasksState, setDefaultTasksState] = useState(defaultTasks);
  const [body, setBody] = useState("");

  const tasks = defaultTasksState.map((task) => {
    // @ts-ignore
    return (
      <li key={task.id}>
        {task.body}. <span> done:{task.done.toString()}</span>
        <button onClick={() => deleteTask(task)}>delete </button>
        <button onClick={() => doTask(task)}>done</button>
      </li>
    );
  });

  function addNewTask(): void {
    setDefaultTasksState([
      ...defaultTasksState,
      {
        id: ++nextId,
        body: body,
        done: false,
      },
    ]);
    setBody("");
  }

  function doTask(task: { body?: string; id?: number; done: any }): void {
    setDefaultTasksState(
      defaultTasksState.map((t) => {
        if (t.id === task.id) t.done = !t.done;
        return t;
      })
    );
  }

  function deleteTask(task: { id: number; body: string; done: boolean }): void {
    setDefaultTasksState(defaultTasksState.filter((t) => t.id !== task.id));
  }
  return (
    <div>
      <h1>List of all to dos</h1>
      <ul> {tasks} </ul>
      <label htmlFor="input">What should you do? </label>
      <input value={body} onChange={(e) => setBody(e.target.value)} />

      <button onClick={addNewTask} className="add-button">
        add task
      </button>
    </div>
  );
}

export default App;
