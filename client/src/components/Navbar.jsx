function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-500">StudyAI</h1>

        <ul className="flex gap-8 text-sm font-medium">
          <li className="hover:text-blue-400 cursor-pointer transition">
            Features
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            Dashboard
          </li>

          <li className="hover:text-blue-400 cursor-pointer transition">
            AI Tools
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
