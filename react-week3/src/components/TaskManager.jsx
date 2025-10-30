import useLocalStorage from "../hooks/useLocalStorage";
import { useState } from "react";
import Button from "./Button";
import Card from "./Card";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  function addTask() {
    if (input.trim() === "") return;
    const newTask = { id: Date.now(), text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function filteredTasks() {
    if (filter === "active") return tasks.filter((t) => !t.completed);
    if (filter === "completed") return tasks.filter((t) => t.completed);
    return tasks;
  }

  return (
    <Card title="Task Manager">
      <div className="space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          className="border p-2 w-full rounded"
        />
        <Button onClick={addTask}>Add Task</Button>

        <div className="flex gap-2 mt-4">
          <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")}>All</Button>
          <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")}>Active</Button>
          <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")}>Completed</Button>
        </div>

        <ul className="mt-4 space-y-2">
          {filteredTasks().map((task) => (
            <li key={task.id} className="flex justify-between items-center">
              <span
                onClick={() => toggleTask(task.id)}
                className={`cursor-pointer ${
                  task.completed ? "line-through text-gray-500 dark:text-gray-400" : ""
                }`}
              >
                {task.text}
              </span>
              <Button variant="danger" onClick={() => deleteTask(task.id)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

