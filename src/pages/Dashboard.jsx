import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmployee = localStorage.getItem('employee');
    if (!storedEmployee) navigate('/');
    else setEmployee(JSON.parse(storedEmployee));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('employee');
    navigate('/');
  };

  if (!employee) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-t from-black via-gray-800 to-black">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {employee.name} !</h2>
        <div className="space-y-4 text-gray-600">
          <p className="text-lg"><span className="font-semibold">Email:</span> {employee.email}</p>
          <p className="text-lg"><span className="font-semibold">Phone:</span> {employee.phone}</p>
          <p className="text-lg"><span className="font-semibold">Position:</span> {employee.position}</p>
          <p className="text-lg"><span className="font-semibold">Salary:</span> ${employee.salary}</p>
        </div>
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}