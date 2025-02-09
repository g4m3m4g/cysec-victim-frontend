import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Plus, Edit2, Trash2, LogOut, X } from 'lucide-react';

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newEmployee, setNewEmployee] = useState({ name: '', email: '', phone: '', position: '', salary: '' });
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const navigate = useNavigate();

  const URL = 'https://cysec-victim-backend.onrender.com';

  useEffect(() => {
    const fetchEmployees = async () => {
      setError(null);
      setLoading(true);
      try {
        const storedData = JSON.parse(localStorage.getItem('employee'));
        if (!storedData || storedData.role !== 'admin') {
          setError('You are not authorized to view this page');
          return;
        }
        const res = await axios.get(`${URL}/employees`);
        setEmployees(res.data);
      } catch (err) {
        setError('Error fetching employee data');
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('employee');
    navigate('/');
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}/employees`, newEmployee);
      setEmployees([...employees, res.data]);
      setNewEmployee({ name: '', email: '', phone: '', position: '', salary: '' });
      setShowAddModal(false);
      setError(null);
    } catch (err) {
      setError('Error adding employee');
    }
  };

  const handleUpdateEmployee = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`${URL}/employees/${editingEmployee.id}`, editingEmployee);
      setEmployees(employees.map(emp => (emp.id === editingEmployee.id ? res.data : emp)));
      setEditingEmployee(null);
      setError(null);
    } catch (err) {
      setError('Error updating employee');
    }
  };

  const handleDeleteEmployee = async (id) => {
    try {
      await axios.delete(`${URL}/employees/${id}`);
      setEmployees(employees.filter(employee => employee.id !== id));
      setShowDeleteModal(false);
      setError(null);
    } catch (err) {
      setError('Error deleting employee');
    }
  };

  const Modal = ({ show, onClose, children, title }) => {
    if (!show) return null;
    
    return (
      <div className="fixed inset-0 backdrop-blur-sm bg-gray-200/30 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          <div className="p-4">
            {children}
          </div>
        </div>
      </div>
    );
  };

  const EmployeeForm = ({ employee, setEmployee, onSubmit, submitText }) => (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={employee.name}
        onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={employee.email}
        onChange={(e) => setEmployee({ ...employee, email: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={employee.phone}
        onChange={(e) => setEmployee({ ...employee, phone: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={employee.position}
        onChange={(e) => setEmployee({ ...employee, position: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <input
        type="number"
        placeholder="Salary"
        value={employee.salary}
        onChange={(e) => setEmployee({ ...employee, salary: e.target.value })}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {submitText}
      </button>
    </form>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Team Members</h1>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <LogOut size={18} />
            <span>Sign out</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          {/* Actions Bar */}
          <div className="p-4 border-b border-gray-100">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus size={18} />
              <span>Add Member</span>
            </button>
          </div>

          {/* Employee List */}
          {loading ? (
            <div className="p-8 text-center text-gray-500">Loading...</div>
          ) : error ? (
            <div className="p-4 mx-4 my-2 bg-red-50 text-red-600 rounded-lg">{error}</div>
          ) : employees.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500 bg-gray-50">
                    <th className="px-4 py-3 font-medium">Name</th>
                    <th className="px-4 py-3 font-medium">Role</th>
                    <th className="px-4 py-3 font-medium">Email</th>
                    <th className="px-4 py-3 font-medium">Phone</th>
                    <th className="px-4 py-3 font-medium text-right">Salary</th>
                    <th className="px-4 py-3 font-medium w-24"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {employees.map((employee) => (
                    <tr key={employee.id} className="group hover:bg-gray-50">
                      <td className="px-4 py-3">{employee.name}</td>
                      <td className="px-4 py-3 text-gray-600">{employee.position}</td>
                      <td className="px-4 py-3 text-gray-600">{employee.email}</td>
                      <td className="px-4 py-3 text-gray-600">{employee.phone}</td>
                      <td className="px-4 py-3 text-right">${Number(employee.salary).toLocaleString()}</td>
                      <td className="px-4 py-3">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => setEditingEmployee(employee)}
                            className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => {
                              setEmployeeToDelete(employee.id);
                              setShowDeleteModal(true);
                            }}
                            className="p-1 text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">No team members yet</div>
          )}
        </div>

        {/* Add Employee Modal */}
        <Modal
          show={showAddModal}
          onClose={() => setShowAddModal(false)}
          title="Add New Team Member"
        >
          <EmployeeForm 
            employee={newEmployee}
            setEmployee={setNewEmployee}
            onSubmit={handleAddEmployee}
            submitText="Add Member"
          />
        </Modal>

        {/* Edit Employee Modal */}
        <Modal
          show={!!editingEmployee}
          onClose={() => setEditingEmployee(null)}
          title="Edit Team Member"
        >
          {editingEmployee && (
            <EmployeeForm 
              employee={editingEmployee}
              setEmployee={setEditingEmployee}
              onSubmit={handleUpdateEmployee}
              submitText="Update Member"
            />
          )}
        </Modal>

        {/* Delete Confirmation Modal */}
        <Modal
          show={showDeleteModal}
          onClose={() => setShowDeleteModal(false)}
          title="Confirm Deletion"
        >
          <div className="space-y-4">
            <p className="text-gray-600">
              Are you sure you want to remove this team member? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDeleteEmployee(employeeToDelete)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AdminDashboard;