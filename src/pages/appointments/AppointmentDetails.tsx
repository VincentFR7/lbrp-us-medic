import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft, Edit, Trash2, Calendar, User, Clock, FileText } from 'lucide-react';
import { toast } from 'react-toastify';
import Button from '../../components/common/Button';

// Mock appointment data
const mockAppointment = {
  id: '1',
  patientId: '101',
  patientName: 'Pvt. James Miller',
  doctorId: '201',
  doctorName: 'Capt. Sarah Johnson',
  date: new Date(2025, 6, 15, 10, 30),
  reason: 'Shrapnel wounds on left arm',
  status: 'CONFIRMED',
  notes: 'Patient requires debridement and wound cleaning. Local anesthesia will be required. Estimated procedure time: 45 minutes.',
  createdAt: new Date(2025, 6, 10),
};

const AppointmentDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // In a real app, this would fetch the appointment by ID
  // For demo purposes, we'll use the mock data
  const appointment = mockAppointment;
  
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to cancel this appointment?')) {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast.success('Appointment cancelled successfully');
      navigate('/appointments');
    }
  };
  
  const getStatusBadgeClasses = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'bg-blue-100 text-blue-800';
      case 'CONFIRMED':
        return 'bg-green-100 text-green-800';
      case 'COMPLETED':
        return 'bg-gray-100 text-gray-800';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  if (!appointment) {
    return (
      <div className="text-center py-12">
        <p>Appointment not found</p>
        <Link to="/appointments" className="text-olive-700 hover:underline mt-4 inline-block">
          Back to appointments
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <Link to="/appointments" className="mr-4">
          <Button variant="outline" size="sm" icon={<ArrowLeft size={16} />}>
            Back
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-olive-900">Appointment Details</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-olive-700 p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold text-khaki-100 flex items-center">
            <Calendar size={20} className="mr-2" />
            Appointment #{id}
          </h2>
          
          <div className="flex space-x-2">
            <Link to={`/appointments/${id}/edit`}>
              <Button variant="outline" size="sm" className="border-khaki-300 text-khaki-100 hover:bg-olive-600" icon={<Edit size={16} />}>
                Edit
              </Button>
            </Link>
            <Button variant="danger" size="sm" icon={<Trash2 size={16} />} onClick={handleDelete}>
              Cancel
            </Button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-olive-800">Appointment Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 flex items-center mb-1">
                    <Calendar size={14} className="mr-1" />
                    Date & Time
                  </p>
                  <p className="font-medium">{format(appointment.date, 'EEEE, MMMM d, yyyy')}</p>
                  <p>{format(appointment.date, 'h:mm a')}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 flex items-center mb-1">
                    <Clock size={14} className="mr-1" />
                    Status
                  </p>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeClasses(appointment.status)}`}>
                    {appointment.status}
                  </span>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 flex items-center mb-1">
                    <FileText size={14} className="mr-1" />
                    Reason
                  </p>
                  <p>{appointment.reason}</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-olive-800">People</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 flex items-center mb-1">
                    <User size={14} className="mr-1" />
                    Patient
                  </p>
                  <p className="font-medium">{appointment.patientName}</p>
                  <p className="text-sm text-gray-500">ID: {appointment.patientId}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 flex items-center mb-1">
                    <User size={14} className="mr-1" />
                    Doctor
                  </p>
                  <p className="font-medium">{appointment.doctorName}</p>
                  <p className="text-sm text-gray-500">ID: {appointment.doctorId}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-olive-800">Additional Notes</h3>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <p>{appointment.notes}</p>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Appointment created on {format(appointment.createdAt, 'MMMM d, yyyy')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;