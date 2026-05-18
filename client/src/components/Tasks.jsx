import { useState } from "react";

function Tasks({ tasks, setTasks }) {
  const [task, setTask] = useState("");

  function addTask() {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ]);
    setTask("");
  }

  function deleteTask(indexToDelete) {
    const updatedTasks = tasks.filter((_, index) => {
      return index !== indexToDelete;
    });

    setTasks(updatedTasks);
  }

  function toggleTask(indexToToggle) {
    const updatedTasks = tasks.map((task, index) => {
      if (index === indexToToggle) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Tasks</h2>

        <p className="text-zinc-400">{tasks.length} Tasks</p>
      </div>

      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addTask();
            }
          }}
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
        {tasks.length === 0 && (
          <div className="bg-zinc-900 border border-dashed border-zinc-700 rounded-2xl p-10 text-center text-zinc-500">
            No tasks yet. Add your first task 🚀
          </div>
        )}
        {tasks.map((t, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between"
          >
            <p
              onClick={() => toggleTask(index)}
              className={`cursor-pointer ${
                t.completed ? "line-through text-zinc-500" : "text-white"
              }`}
            >
              {t.text}
            </p>

            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-400 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
