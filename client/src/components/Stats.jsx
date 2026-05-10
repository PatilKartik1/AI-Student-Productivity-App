function Stats() {
  const stats = [
    {
      number: "10K+",
      label: "Active Students",
    },
    {
      number: "250K+",
      label: "Tasks Completed",
    },
    {
      number: "95%",
      label: "Productivity Boost",
    },
  ];

  return (
    <section className="px-6 py-20 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center"
            >
              <h2 className="text-5xl font-bold text-blue-500">
                {stat.number}
              </h2>

              <p className="text-zinc-400 mt-4 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
