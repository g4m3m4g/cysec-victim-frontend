import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmployeeCard = ({ id }) => {
  const URL = "https://cysec-victim-backend.onrender.com";
  const [emdata, setEmdata] = useState({ id: "", name: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    async function fetchEmployee() {
      try {
        const res = await axios.get(`${URL}/employees/${id}`, {
          signal: abortController.signal,
        });
        setEmdata(res.data[0]);
      } catch (error) {
        if (!abortController.signal.aborted) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchEmployee();
    return () => abortController.abort();
  }, [id]);

  if (loading)
    return (
      <div className="p-6 bg-white shadow-lg rounded-lg text-center animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-2"></div>
      </div>
    );

  if (error)
    return (
      <div className="p-6 bg-white shadow-lg rounded-lg text-center text-red-500">
        Error: {error.message}
      </div>
    );

  return (
    <Link to={`/employee/${emdata?.id}`}>
      <div className="p-6 bg-white shadow-lg rounded-lg text-center transform transition-all hover:scale-105 hover:shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Employee Info</h2>
        <p className="text-gray-600">
          <span className="font-semibold">ID:</span> {emdata?.id}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Name:</span> {emdata?.name}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Email:</span> {emdata?.email}
        </p>
      </div>
    </Link>
  );
};

export default EmployeeCard;
