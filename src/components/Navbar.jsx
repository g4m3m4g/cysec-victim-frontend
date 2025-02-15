import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo/Brand Name */}
      <p
        className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-700 transition duration-300"
        onClick={() => navigate("/")}
      >
        Cysec788
      </p>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <p
          className="text-gray-700 font-medium cursor-pointer hover:text-blue-600 transition duration-300"
          onClick={() => navigate("/login")}
        >
          Login
        </p>
      </div>
    </div>
  );
};

export default Navbar;