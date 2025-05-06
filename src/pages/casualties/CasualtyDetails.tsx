import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft, Edit, Trash2, User, MapPin, Clock, FileText, AlertTriangle } from 'lucide-react';
import { toast } from 'react-toastify';
import Button from '../../components/common/Button';

// Mock casualty data
const mockCasualty = {
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
};

const CasualtyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // In a real app, this would fetch the casualty by ID
  const casualty = mockCasualty;
  
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this casualty record? This action cannot be undone.')) {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast.success('Casualty record deleted successfully');
      navigate('/casualties');
    }
  };
  
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
  
  if (!casualty) {
    return (
      <div className="text-center py-12">
        <p>Casualty record not found</p>
        <Link to="/casualties" className="text-medical-red hover:underline mt-4 inline-block">
          Back to casualties
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center mb-6">
        <Link to="/casualties" className="mr-4">
          <Button variant="outline" size="sm" icon={<ArrowLeft size={16} />}>
            Back
          </Button>
        </Link>
        <h1 className="text-3xl font-bold text-olive-900">Casualty Record</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-medical-red p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold text-white flex items-center">
            <AlertTriangle size={20} className="mr-2" />
            Casualty Information
          </h2>
          
          <div className="flex space-x-2">
            <Link to={`/casualties/${id}/edit`}>
              <Button variant="outline" size="sm" className="border-white text-white hover:bg-medical-red-dark" icon={<Edit size={16} />}>
                Edit
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="border-white text-white hover:bg-medical-red-dark" icon={<Trash2 size={16} />} onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-olive-800">Patient Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 flex items-center mb-1">
                    <User size={14} className="mr-1" />
                    Name and Rank
                  </p>
                  <p className="font-medium">{casualty.name}</p>
                  <p className="text-sm text-gray-500">{casualty.rank}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Serial Number</p>
                  <p>{casualty.serialNumber}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Unit</p>
                  <p>{casualty.unit}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 flex items-center mb-1">
                    <Clock size={14} className="mr-1" />
                    Status
                  </p>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadgeClasses(casualty.status)}`}>
                    {casualty.status}
                  </span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-olive-800">Incident Details</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 flex items-center mb-1">
                    <Clock size={14} className="mr-1" />
                    Date of Injury
                  </p>
                  <p>{format(casualty.injuryDate, 'MMMM d, yyyy')}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 flex items-center mb-1">
                    <MapPin size={14} className="mr-1" />
                    Location
                  </p>
                  <p>{casualty.injuryLocation}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Injuries</p>
                  <p>{casualty.injuries}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Treatment</p>
                  <p>{casualty.treatment}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-olive-800">Medical Notes</h3>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <p>{casualty.notes}</p>
            </div>
          </div>
          
          <div className="mt-8 border-t border-gray-200 pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">Attending Medical Officer</p>
                <p className="font-medium">{casualty.attendingMedicName}</p>
                <p className="text-sm text-gray-500">ID: {casualty.attendingMedicId}</p>
              </div>
              
              <div className="text-right">
                <p className="text-sm text-gray-500">Last Updated</p>
                <p>{format(casualty.updatedAt, 'MMMM d, yyyy')}</p>
                <p className="text-sm text-gray-500">{format(casualty.updatedAt, 'h:mm a')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasualtyDetails;