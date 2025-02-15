import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-xl shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <p
            className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition duration-300"
            onClick={() => navigate("/")}
          >
            Cysec788
          </p>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <p
              className="text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition duration-300"
              onClick={() => navigate("/achievements")}
            >
              Achievements
            </p>
            <p
              className="text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition duration-300"
              onClick={() => navigate("/about")}
            >
              About Us
            </p>
            <p
              className="text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition duration-300"
              onClick={() => navigate("/login")}
            >
              Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;