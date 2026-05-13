import { useState } from "react";

function Tasks() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  }

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">Tasks</h2>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 flex-1 outline-none"
        />

        <button
          onClick={addTask}
          className="bg-blue-600 hover:bg-blue-700 transition px-6 rounded-xl font-semibold"
        >
          Add
        </button>
      </div>

      <div className="mt-8 space-y-4">
        {tasks.map((t, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-4"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
