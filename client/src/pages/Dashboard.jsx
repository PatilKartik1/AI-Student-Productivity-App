import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardCards from "../components/DashboardCards";
import Tasks from "../components/Tasks";
import TaskStats from "../components/TaskStats";

function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="flex bg-black text-white">
      <Sidebar />

      <main className="flex-1 p-10">
        <h1 className="text-5xl font-bold">Dashboard</h1>

        <p className="text-zinc-400 mt-4">Welcome back, Kartik 👋</p>
        <DashboardCards />
        <TaskStats tasks={tasks} />

        <Tasks tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}

export default Dashboard;
