function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 border-r border-zinc-800 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-blue-500">StudyAI</h1>

      <nav className="mt-10">
        <ul className="space-y-6 text-zinc-300">
          <li className="hover:text-white cursor-pointer transition">
            Dashboard
          </li>

          <li className="hover:text-white cursor-pointer transition">Tasks</li>

          <li className="hover:text-white cursor-pointer transition">Notes</li>

          <li className="hover:text-white cursor-pointer transition">
            AI Tools
          </li>

          <li className="hover:text-white cursor-pointer transition">
            Analytics
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
