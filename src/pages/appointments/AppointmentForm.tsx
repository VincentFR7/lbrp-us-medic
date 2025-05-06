import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Calendar, User, Clock, FileText, ArrowLeft, Save } from 'lucide-react';
import { toast } from 'react-toastify';
import Button from '../../components/common/Button';

interface AppointmentFormProps {
  isEdit?: boolean;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ isEdit = false }) => {
  const navigate = useNavigate();
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'yyyy-MM-dd');
  const formattedTime = format(currentDate, 'HH:mm');
  
  const [formData, setFormData] = useState({
    patientName: isEdit ? 'Pvt. James Miller' : '',
    appointmentDate: formattedDate,
    appointmentTime: formattedTime,
    reason: isEdit ? 'Shrapnel wounds on left arm' : '',
    notes: isEdit ? 'Patient requires debridement and wound cleaning' : '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.patientName || !formData.appointmentDate || !formData.appointmentTime || !formData.reason) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success(isEdit ? 'Appointment updated successfully' : 'Appointment created successfully');
    navigate('/appointments');
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <Link to="/appointments" className="mr-4">
          <Button variant="outline" size="sm" icon={<ArrowLeft size={16} />}>
            Back
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-olive-900">{isEdit ? 'Edit Appointment' : 'New Appointment'}</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-olive-700 p-4">
          <h2 className="text-lg font-bold text-khaki-100 flex items-center">
            <Calendar size={20} className="mr-2" />
            {isEdit ? 'Edit Appointment Details' : 'Schedule New Appointment'}
          </h2>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 mb-1">
                Patient Name*
              </label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="patientName"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500"
                  placeholder="Enter patient name and rank"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Date*
                </label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Time*
                </label>
                <div className="relative">
                  <Clock size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="time"
                    id="appointmentTime"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                Reason for Appointment*
              </label>
              <input
                type="text"
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500"
                placeholder="Briefly describe the medical issue or reason"
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <div className="relative">
                <FileText size={16} className="absolute left-3 top-3 text-gray-400" />
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500"
                  placeholder="Any additional information or specific requirements"
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end space-x-4">
            <Link to="/appointments">
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Link>
            <Button 
              type="submit" 
              loading={isSubmitting}
              icon={<Save size={16} />}
            >
              {isEdit ? 'Update Appointment' : 'Schedule Appointment'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;