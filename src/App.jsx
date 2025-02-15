import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Login from './pages/Login';
import LandPage from './pages/LandPage';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import EmployeeDetail from './pages/EmployeeDetail';

export default function App() {
  return (
    <Router>
      <Navbar />  

      <Routes>
        <Route path="/" element={<LandPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee/:id" element={<EmployeeDetail/>} />

        {/* Protected route for employees */}
        <Route element={<ProtectedRoute allowedRoles={['employee']} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* Protected route for admins */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
