export default function Features() {
  const features = [
    ["🤖", "AI Tutor", "AI-based learning support with notes, quizzes and doubt solving."],
    ["🎓", "Scholarship Finder", "Find suitable scholarships based on category, income and education level."],
    ["🧑‍⚕️", "Telemedicine", "Connect villagers with doctors and basic health guidance online."],
    ["🌾", "Farmer Support", "Crop guidance, weather support, mandi price and farming suggestions."],
    ["🏛️", "Scheme Finder", "Discover eligible government schemes using simple user details."],
    ["💼", "Job Portal", "Local jobs, internships, government jobs and skill-based opportunities."],
    ["🧭", "Career Guidance", "Career roadmaps, skill paths and preparation guidance for students."],
    ["💬", "Community Forum", "Ask questions, share problems and discuss village-level solutions."],
    ["🎙️", "Voice Assistant", "Voice-based access for users who are not comfortable typing."],
  ];

  return (
    <section id="features" className="px-8 py-20 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">
        Powerful Features for Rural Growth
      </h2>

      <p className="text-center text-gray-600 mb-12">
        Designed for students, farmers, villagers, teachers and officials.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-7 rounded-3xl shadow hover:shadow-lg transition"
          >
            <div className="text-4xl mb-4">{feature[0]}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {feature[1]}
            </h3>
            <p className="text-gray-600">{feature[2]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}