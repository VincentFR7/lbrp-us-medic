import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Casualty } from '../../types';
import { User, MapPin, Calendar, ArrowRight } from 'lucide-react';

// Mock casualty data
const mockCasualties: Casualty[] = [
  {
    id: '1',
    name: 'Pvt. James Miller',
    rank: 'Private',
    serialNumber: 'US-12345678',
    unit: '101st Airborne Division',
    injuryDate: new Date(2025, 6, 10),
    injuryLocation: 'Bastogne, Belgium',
    injuries: 'Shrapnel wounds to left arm and torso',
    treatment: 'Wound debridement, stitches, antibiotics',
    status: 'STABLE',
    attendingMedicId: '201',
    attendingMedicName: 'Capt. Sarah Johnson',
    notes: 'Patient responding well to treatment. No signs of infection.',
    updatedAt: new Date(2025, 6, 11),
  },
  {
    id: '2',
    name: 'Sgt. Robert Thompson',
    rank: 'Sergeant',
    serialNumber: 'US-23456789',
    unit: '82nd Airborne Division',
    injuryDate: new Date(2025, 6, 8),
    injuryLocation: 'St. Vith, Belgium',
    injuries: 'Gunshot wound to right shoulder',
    treatment: 'Surgery to remove bullet, blood transfusion',
    status: 'SERIOUS',
    attendingMedicId: '202',
    attendingMedicName: 'Lt. Michael Davis',
    notes: 'Monitoring for infection. Pain management ongoing.',
    updatedAt: new Date(2025, 6, 9),
  },
  {
    id: '3',
    name: 'Cpl. William Harris',
    rank: 'Corporal',
    serialNumber: 'US-34567890',
    unit: '4th Infantry Division',
    injuryDate: new Date(2025, 6, 7),
    injuryLocation: 'Ardennes Forest',
    injuries: 'Exposure to mustard gas, severe burns to respiratory system',
    treatment: 'Oxygen therapy, burn treatment, eye irrigation',
    status: 'CRITICAL',
    attendingMedicId: '203',
    attendingMedicName: 'Maj. Elizabeth Brown',
    notes: 'Critical condition. Requires constant monitoring.',
    updatedAt: new Date(2025, 6, 9),
  },
  {
    id: '4',
    name: 'Lt. Thomas Wilson',
    rank: 'Lieutenant',
    serialNumber: 'US-45678901',
    unit: '2nd Armored Division',
    injuryDate: new Date(2025, 6, 5),
    injuryLocation: 'Luxembourg Border',
    injuries: 'Combat fatigue, extreme exhaustion, malnutrition',
    treatment: 'Rest, hydration, nutrition, psychological support',
    status: 'RECOVERED',
    attendingMedicId: '204',
    attendingMedicName: 'Capt. Robert Johnson',
    notes: 'Fully recovered. Cleared for return to duty.',
    updatedAt: new Date(2025, 6, 8),
  },
  {
    id: '5',
    name: 'Pvt. John Anderson',
    rank: 'Private',
    serialNumber: 'US-56789012',
    unit: '29th Infantry Division',
    injuryDate: new Date(2025, 6, 3),
    injuryLocation: 'Malmedy, Belgium',
    injuries: 'Multiple gunshot wounds to chest and abdomen',
    treatment: 'Emergency surgery, multiple blood transfusions',
    status: 'DECEASED',
    attendingMedicId: '205',
    attendingMedicName: 'Maj. David Clark',
    notes: 'Patient did not survive despite emergency intervention. Time of death: 0345 hours.',
    updatedAt: new Date(2025, 6, 3),
  }
];

interface CasualtiesListProps {
  searchTerm: string;
  statusFilter: string;
}

const CasualtiesList: React.FC<CasualtiesListProps> = ({ searchTerm, statusFilter }) => {
  // Filter casualties based on search term and status filter
  const filteredCasualties = mockCasualties.filter(casualty => {
    const matchesSearch = 
      casualty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      casualty.rank.toLowerCase().includes(searchTerm.toLowerCase()) ||
      casualty.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      casualty.unit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      casualty.injuries.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'ALL' || casualty.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  const getStatusBadgeClasses = (status: string) => {
    switch (status) {
      case 'CRITICAL':
        return 'bg-red-100 text-red-800';
      case 'SERIOUS':
        return 'bg-orange-100 text-orange-800';
      case 'STABLE':
        return 'bg-blue-100 text-blue-800';
      case 'RECOVERED':
        return 'bg-green-100 text-green-800';
      case 'DECEASED':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <div className="divide-y divide-gray-100">
      {filteredCasualties.length > 0 ? (
        filteredCasualties.map(casualty => (
          <div key={casualty.id} className="p-4 hover:bg-gray-50 transition-colors duration-150">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusBadgeClasses(casualty.status)}`}>
                    {casualty.status}
                  </span>
                  <span className="ml-2 text-sm text-gray-500 flex items-center">
                    <Calendar size={14} className="mr-1" />
                    Injured: {format(casualty.injuryDate, 'MMMM d, yyyy')}
                  </span>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
                  <div className="mb-2 md:mb-0">
                    <div className="text-sm text-gray-500 flex items-center mb-1">
                      <User size={14} className="mr-1" />
                      Patient Details
                    </div>
                    <div className="font-medium">{casualty.name}</div>
                    <div className="text-sm">{casualty.rank} | {casualty.serialNumber}</div>
                    <div className="text-sm text-gray-500">{casualty.unit}</div>
                  </div>
                  
                  <div className="mb-2 md:mb-0">
                    <div className="text-sm text-gray-500 flex items-center mb-1">
                      <MapPin size={14} className="mr-1" />
                      Location
                    </div>
                    <div>{casualty.injuryLocation}</div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm text-gray-500 mb-1">Injuries</div>
                    <div>{casualty.injuries}</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-4 md:self-center flex justify-end">
                <Link to={`/casualties/${casualty.id}`} className="inline-flex items-center text-medical-red hover:text-medical-red-dark">
                  View record
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="p-8 text-center text-gray-500">
          <p>No casualty records found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default CasualtiesList;