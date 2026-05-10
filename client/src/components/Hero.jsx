function Hero() {
  return (
    <section className="text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl font-bold leading-tight">
          AI Powered{" "}
          <span className="text-blue-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)]">
            Student Productivity
          </span>{" "}
          Platform
        </h1>

        <p className="text-zinc-400 text-lg mt-6 max-w-2xl mx-auto">
          Manage tasks, track study sessions, generate AI notes summaries, and
          boost productivity with smart tools designed for students.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-semibold">
            Get Started
          </button>

          <button className="border border-zinc-700 hover:border-zinc-500 transition px-6 py-3 rounded-xl font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
