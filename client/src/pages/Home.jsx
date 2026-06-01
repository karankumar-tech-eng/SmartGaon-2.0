import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 text-gray-900">
      <Navbar />
      <Hero />
      <Stats />
      <Features />

      <section id="users" className="px-8 py-16 bg-blue-700 text-white">
        <h2 className="text-4xl font-bold text-center mb-10">
          Built For Everyone in Rural India
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {["Students", "Farmers", "Teachers", "Villagers", "Officials"].map(
            (user, index) => (
              <div
                key={index}
                className="bg-white/15 p-6 rounded-3xl text-center font-semibold"
              >
                {user}
              </div>
            )
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}