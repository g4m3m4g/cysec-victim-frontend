import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import icons

const EmployeeDetail = () => {
  const URL = "https://cysec-victim-backend.onrender.com";
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState(null);
  const [quote, setQuote] = useState(null); // State for random quote
  const navigate = useNavigate();

  // Fetch employee data
  useEffect(() => {
    async function fetchEmployee() {
      try {
        console.log("Fetching data for ID:", id);
        const response = await fetch(`${URL}/employees/${id}`);
        console.log("Response status:", response.status);

        if (!response.ok) {
          setError(response.status);
          throw new Error("Failed to fetch employee data");
        }

        const data = await response.json();
        console.log("Fetched employee data:", data);

        // Handle array response
        if (Array.isArray(data)) {
          setEmployee(data[0]);
        } else {
          setEmployee(data);
        }
      } catch (error) {
        console.error("Error during fetch:", error.message);
        setError("An error occurred while fetching data.");
      }
    }
    fetchEmployee();
  }, [id]);

  // Fetch random inspirational quote from Quotes on Design API
  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await fetch(
          "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_fields=content,title"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch quote");
        }
        const data = await response.json();
        const randomQuote = data[id]; // Get the first random quote
        setQuote({
          content: randomQuote.content.rendered.replace(/<p>|<\/p>/g, ""), // Remove <p> tags
          author: randomQuote.title.rendered,
        });
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    }
    fetchQuote();
  }, []);

  // Log updated employee state
  useEffect(() => {
    console.log("Employee state updated:", employee);
  }, [employee]);

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600 text-xl">
        Error: {error}
      </div>
    );
  }

  if (!employee) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600 text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-600 hover:text-gray-800 mb-4 flex items-center transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back to Home
      </button>

      {/* Employee Details Card */}
      <div className="max-w-3xl mx-auto bg-white/30 backdrop-blur-lg rounded-lg shadow-xl p-8 sm:p-12 border border-white/20">
        <div className="flex flex-col items-center space-y-6">
          {/* Profile Picture */}
          <div className="relative">
            <img
              src={`https://i.pravatar.cc/150?img=${id}`}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent animate-ping-slow"></div>
          </div>

          {/* Employee Name and Position */}
          <h2 className="text-4xl font-bold text-gray-900">{employee.name}</h2>
          <p className="text-lg text-blue-600 font-semibold">
            {employee.position}
          </p>

          {/* Contact Information */}
          <div className="w-full space-y-4">
            <div className="flex items-center justify-center space-x-4">
              <FaEnvelope className="text-gray-600" />
              <span className="text-gray-700">{employee.email}</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <FaPhone className="text-gray-600" />
              <span className="text-gray-700">{employee.phone}</span>
            </div>
          </div>

          {/* Random Inspirational Quote */}
          {quote && (
            <div className="mt-8 text-center">
              <p className="text-xl text-gray-700 italic">"{quote.content}"</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;