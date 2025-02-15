import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Login from './pages/Login';
import LandPage from './pages/LandPage';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import EmployeeDetail from './pages/EmployeeDetail';
import Achievements from './pages/Achievements';
import AchievementDetails from './pages/AchievementDetails';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />

      {/* Main Content with Padding */}
      <div className="pt-16"> {/* Add padding-top to avoid overlap with the navbar */}
        <Routes>
          <Route path="/" element={<LandPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/employee/:id" element={<EmployeeDetail />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/achievements/:id" element={<AchievementDetails />} />
          <Route path="/about" element={<AboutUs />} />

          {/* Protected route for employees */}
          <Route element={<ProtectedRoute allowedRoles={['employee']} />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Protected route for admins */}
          <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </div>
    
      {/* Footer */}
      <Footer />
    </Router>
  );
}