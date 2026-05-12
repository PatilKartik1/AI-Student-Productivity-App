import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <div className="flex bg-black text-white">
      <Sidebar />

      <main className="flex-1 p-10">
        <h1 className="text-5xl font-bold">Dashboard</h1>

        <p className="text-zinc-400 mt-4">Welcome back, Kartik 👋</p>
      </main>
    </div>
  );
}

export default Dashboard;
