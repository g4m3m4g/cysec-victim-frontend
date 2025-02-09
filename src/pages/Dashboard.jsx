import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Settings, Mail, Phone, Briefcase, DollarSign, LogOut, User } from 'lucide-react';

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

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      {/* Top Navigation */}
      <nav className="bg-white/10 backdrop-blur-lg rounded-lg p-4 mb-6 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Employee Portal</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 text-white hover:bg-white/10 rounded-full transition">
            <Bell size={20} />
          </button>
          <button className="p-2 text-white hover:bg-white/10 rounded-full transition">
            <Settings size={20} />
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        {/* Profile Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold">
              <img src="https://media.tenor.com/wxjjQc2HzgoAAAAM/cattt.gif" alt="profile" className="h-16 w-16 rounded-full bg-gradient-to-br" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{employee.name}</h2>
              <p className="text-gray-300">{employee.position}</p>
            </div>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="h-5 w-5" />
              <span>{employee.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="h-5 w-5" />
              <span>{employee.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Briefcase className="h-5 w-5" />
              <span>{employee.position}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <DollarSign className="h-5 w-5" />
              <span>${employee.salary.toLocaleString()}/year</span>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-500/80 hover:bg-red-600/80 text-white py-2 rounded-lg transition duration-300"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Quick Actions Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
          <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition flex flex-col items-center gap-2">
              <User className="h-6 w-6" />
              <span>Update Profile</span>
            </button>
            <button className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition flex flex-col items-center gap-2">
              <Settings className="h-6 w-6" />
              <span>Settings</span>
            </button>
            <button className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition flex flex-col items-center gap-2">
              <Bell className="h-6 w-6" />
              <span>Notifications</span>
            </button>
            <button className="p-4 bg-white/5 hover:bg-white/10 rounded-lg transition flex flex-col items-center gap-2">
              <Mail className="h-6 w-6" />
              <span>Messages</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}