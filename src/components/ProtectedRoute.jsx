import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ role, allowedRoles }) {
  const user = JSON.parse(localStorage.getItem('employee'));

  if (!user) {
    return <Navigate to="/" />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
