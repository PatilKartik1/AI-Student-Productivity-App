function TaskStats({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter((task) => task.completed).length;

  const pendingTasks = totalTasks - completedTasks;

  const completionRate =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="grid md:grid-cols-4 gap-6 mt-10">
      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
        <h3 className="text-zinc-400">Total Tasks</h3>
        <p className="text-4xl font-bold mt-4 text-blue-500">{totalTasks}</p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
        <h3 className="text-zinc-400">Completed</h3>
        <p className="text-4xl font-bold mt-4 text-green-500">
          {completedTasks}
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
        <h3 className="text-zinc-400">Pending</h3>
        <p className="text-4xl font-bold mt-4 text-yellow-500">
          {pendingTasks}
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
        <h3 className="text-zinc-400">Completion</h3>
        <p className="text-4xl font-bold mt-4 text-purple-500">
          {completionRate}%
        </p>
      </div>
    </div>
  );
}

export default TaskStats;
