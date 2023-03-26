import Task from "../Task";

export default function SingleTask(props: {
  task: Task;
  deleteTask: Function;
  doTask: Function;
}) {
  return (
    <li>
      {props.task.body}. <span> done:{props.task.done.toString()}</span>
      <button onClick={() => props.deleteTask(props.task)}>delete</button>
      <button onClick={() => props.doTask(props.task)}>done</button>
    </li>
  );
}
