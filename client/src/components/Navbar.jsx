export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white/80 backdrop-blur shadow-sm sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-700">SmartGaon 2.0</h1>

      <div className="hidden md:flex gap-8 font-medium text-gray-700">
        <a href="#features" className="hover:text-blue-700">Features</a>
        <a href="#users" className="hover:text-blue-700">Users</a>
        <a href="#impact" className="hover:text-blue-700">Impact</a>
        <a href="#contact" className="hover:text-blue-700">Contact</a>
      </div>

      <button className="bg-blue-700 text-white px-5 py-2 rounded-full hover:bg-blue-800">
        Get Started
      </button>
    </nav>
  );
}