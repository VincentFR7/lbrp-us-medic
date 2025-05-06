import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Plus, Calendar, List, Search } from 'lucide-react';
import Button from '../../components/common/Button';
import AppointmentsList from './AppointmentsList';
import AppointmentForm from './AppointmentForm';
import AppointmentDetails from './AppointmentDetails';

const AppointmentsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <Routes>
      <Route path="/" element={
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-olive-900">Medical Appointments</h1>
              <p className="text-gray-600">Schedule and manage medical consultations</p>
            </div>
            
            <Link to="/appointments/new">
              <Button icon={<Plus size={16} />}>
                New Appointment
              </Button>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-olive-700 p-4 flex justify-between items-center">
              <div className="flex items-center text-khaki-100">
                <Calendar size={20} className="mr-2" />
                <h2 className="text-lg font-bold">All Appointments</h2>
              </div>
              
              <div className="flex space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search appointments..."
                    className="bg-olive-800 text-khaki-100 placeholder-khaki-300 rounded-md px-3 py-1 pl-8 text-sm w-full focus:outline-none focus:ring-1 focus:ring-khaki-300"
                  />
                  <Search size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-khaki-300" />
                </div>
                
                <button className="bg-olive-800 hover:bg-olive-600 text-khaki-100 rounded-md p-1">
                  <List size={20} />
                </button>
              </div>
            </div>
            
            <AppointmentsList searchTerm={searchTerm} />
          </div>
        </div>
      } />
      
      <Route path="/new" element={<AppointmentForm />} />
      <Route path="/:id" element={<AppointmentDetails />} />
      <Route path="/:id/edit" element={<AppointmentForm isEdit />} />
    </Routes>
  );
};

export default AppointmentsPage;