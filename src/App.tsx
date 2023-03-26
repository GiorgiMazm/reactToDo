import {useState} from "react";
import "./styles/App.css";
import SingleTask from "./components/SingleTask";
import Task from "./Task";

let nextId = 3;

function App() {
  const defaultTasks: Task[] = [
    { body: "Kill them all", id: 1, done: false },
    { body: "Destroy the world", id: 2, done: false },
    { body: "Be the best version of yourself", id: 3, done: false },
  ];

  const [defaultTasksState, setDefaultTasksState] = useState(defaultTasks);
  const [body, setBody] = useState("");

  const tasks = defaultTasksState.map((task) => {
    return (
      <SingleTask
        key={task.id}
        task={task}
        doTask={doTask}
        deleteTask={deleteTask}
      ></SingleTask>
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

  function doTask(task: Task): void {
    setDefaultTasksState(
      defaultTasksState.map((t) => {
        if (t.id === task.id) t.done = !t.done;
        return t;
      })
    );
  }

  function deleteTask(task: Task): void {
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
