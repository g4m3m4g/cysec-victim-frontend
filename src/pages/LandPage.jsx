import EmployeeHero from "../components/EmployeeHero";

const LandPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
          Empowering your journey with cutting-edge technology and seamless experiences.
        </p>
      </header>

      {/* Features Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Seamless Experience
          </h2>
          <p className="text-gray-600">
            Our platform ensures a smooth and intuitive workflow for all users.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Advanced Technology
          </h2>
          <p className="text-gray-600">
            Leveraging AI and modern frameworks to deliver unparalleled efficiency.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            User-Centric Design
          </h2>
          <p className="text-gray-600">
            Designed with you in mind, ensuring ease of use and accessibility.
          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="mb-16">
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
          Get Started
        </button>
      </div>

      {/* EmployeeHero Section */}
      <div className="w-full">
        <EmployeeHero />
      </div>
    </div>
  );
};

export default LandPage;