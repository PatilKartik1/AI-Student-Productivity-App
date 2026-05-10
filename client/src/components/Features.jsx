function Features() {
  const features = [
    {
      title: "AI Notes Summarizer",
      description: "Convert long notes into short smart summaries instantly.",
    },
    {
      title: "Study Planner",
      description: "Generate AI-powered study schedules for exams and goals.",
    },
    {
      title: "Task Management",
      description: "Track assignments, deadlines, and daily productivity.",
    },
  ];

  return (
    <section className="text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Powerful Features</h2>

          <p className="text-zinc-400 mt-4">
            Everything students need to stay productive and focused.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>

              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
