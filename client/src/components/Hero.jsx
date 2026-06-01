export default function Hero() {
  return (
    <section className="px-8 py-20 text-center">
      <p className="text-blue-700 font-semibold mb-4">
        AI Powered Rural Development Ecosystem
      </p>

      <h2 className="text-4xl md:text-6xl font-extrabold max-w-5xl mx-auto leading-tight">
        One Digital Platform for Education, Healthcare, Jobs, Farming &
        Government Services
      </h2>

      <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
        SmartGaon 2.0 helps rural citizens access learning, scholarships,
        telemedicine, farmer support, career guidance, jobs, schemes and
        community support from one place.
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <button className="bg-blue-700 text-white px-7 py-3 rounded-full font-semibold hover:bg-blue-800">
          Explore Platform
        </button>

        <button className="border border-blue-700 text-blue-700 px-7 py-3 rounded-full font-semibold hover:bg-blue-50">
          View Features
        </button>
      </div>
    </section>
  );
}