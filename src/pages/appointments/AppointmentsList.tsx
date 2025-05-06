import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Appointment } from '../../types';
import { Clock, User, Clipboard, ArrowRight } from 'lucide-react';

// Mock appointment data
const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '101',
    patientName: 'Pvt. James Miller',
    doctorId: '201',
    doctorName: 'Capt. Sarah Johnson',
    date: new Date(2025, 6, 15, 10, 30),
    reason: 'Shrapnel wounds on left arm',
    status: 'CONFIRMED',
    notes: 'Patient requires debridement and wound cleaning',
    createdAt: new Date(2025, 6, 10),
  },
  {
    id: '2',
    patientId: '102',
    patientName: 'Sgt. Robert Thompson',
    doctorId: '202',
    doctorName: 'Lt. Michael Davis',
    date: new Date(2025, 6, 16, 14, 0),
    reason: 'Follow-up examination for previous surgery',
    status: 'CONFIRMED',
    notes: 'Check healing progress and remove stitches if ready',
    createdAt: new Date(2025, 6, 11),
  },
  {
    id: '3',
    patientId: '103',
    patientName: 'Cpl. William Harris',
    doctorId: '',
    doctorName: '',
    date: new Date(2025, 6, 17, 9, 15),
    reason: 'Respiratory issues after gas exposure',
    status: 'PENDING',
    notes: 'Patient experiencing persistent coughing and breathing difficulties',
    createdAt: new Date(2025, 6, 12),
  },
  {
    id: '4',
    patientId: '104',
    patientName: 'Pvt. Thomas Wilson',
    doctorId: '203',
    doctorName: 'Maj. Elizabeth Brown',
    date: new Date(2025, 6, 14, 11, 0),
    reason: 'Psychological evaluation',
    status: 'COMPLETED',
    notes: 'Patient showing signs of combat fatigue, recommended rest',
    createdAt: new Date(2025, 6, 8),
  },
  {
    id: '5',
    patientId: '105',
    patientName: 'Lt. John Anderson',
    doctorId: '201',
    doctorName: 'Capt. Sarah Johnson',
    date: new Date(2025, 6, 13, 16, 30),
    reason: 'Gunshot wound to right shoulder',
    status: 'CANCELLED',
    notes: 'Patient transferred to field hospital',
    createdAt: new Date(2025, 6, 9),
  }
];

interface AppointmentsListProps {
  searchTerm: string;
}

const AppointmentsList: React.FC<AppointmentsListProps> = ({ searchTerm }) => {
  // Filter appointments based on search term
  const filteredAppointments = mockAppointments.filter(appointment => 
    appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.reason.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (appointment.doctorName && appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
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
  
  return (
    <div className="divide-y divide-gray-100">
      {filteredAppointments.length > 0 ? (
        filteredAppointments.map(appointment => (
          <div key={appointment.id} className="p-4 hover:bg-gray-50 transition-colors duration-150">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusBadgeClasses(appointment.status)}`}>
                    {appointment.status}
                  </span>
                  <span className="ml-2 text-sm text-gray-500 flex items-center">
                    <Clock size={14} className="mr-1" />
                    {format(appointment.date, 'MMMM d, yyyy')} at {format(appointment.date, 'h:mm a')}
                  </span>
                </div>
                
                <div className="flex items-start space-x-8">
                  <div>
                    <div className="text-sm text-gray-500 flex items-center mb-1">
                      <User size={14} className="mr-1" />
                      Patient
                    </div>
                    <div className="font-medium">{appointment.patientName}</div>
                  </div>
                  
                  {appointment.doctorName && (
                    <div>
                      <div className="text-sm text-gray-500 flex items-center mb-1">
                        <User size={14} className="mr-1" />
                        Doctor
                      </div>
                      <div className="font-medium">{appointment.doctorName}</div>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 flex items-center mb-1">
                      <Clipboard size={14} className="mr-1" />
                      Reason
                    </div>
                    <div>{appointment.reason}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-4 md:self-center flex justify-end">
                <Link to={`/appointments/${appointment.id}`} className="inline-flex items-center text-olive-700 hover:text-olive-900">
                  View details
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="p-8 text-center text-gray-500">
          <p>No appointments found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default AppointmentsList;