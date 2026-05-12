function DashboardCards() {
  const cards = [
    {
      title: "Study Hours",
      value: "42h",
    },
    {
      title: "Tasks Completed",
      value: "18",
    },
    {
      title: "Focus Sessions",
      value: "12",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
        >
          <h3 className="text-zinc-400 text-lg">{card.title}</h3>

          <p className="text-4xl font-bold mt-4 text-blue-500">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;
