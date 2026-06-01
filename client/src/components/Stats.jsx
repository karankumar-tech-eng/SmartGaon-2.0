export default function Stats() {
  const stats = [
    ["10+", "Core Features"],
    ["5+", "User Types"],
    ["24/7", "AI Support"],
    ["1", "Unified Platform"],
  ];

  return (
    <section
      id="impact"
      className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 max-w-6xl mx-auto"
    >
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-3xl shadow text-center"
        >
          <h3 className="text-3xl font-bold text-blue-700">{item[0]}</h3>
          <p className="text-gray-600 mt-2">{item[1]}</p>
        </div>
      ))}
    </section>
  );
}