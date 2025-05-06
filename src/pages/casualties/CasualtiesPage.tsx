import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Plus, Users, Search, Filter } from 'lucide-react';
import Button from '../../components/common/Button';
import CasualtiesList from './CasualtiesList';
import CasualtyForm from './CasualtyForm';
import CasualtyDetails from './CasualtyDetails';

const CasualtiesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  
  return (
    <Routes>
      <Route path="/" element={
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-olive-900">Casualty Records</h1>
              <p className="text-gray-600">Manage and track battlefield casualties</p>
            </div>
            
            <Link to="/casualties/new">
              <Button variant="danger" icon={<Plus size={16} />}>
                New Casualty Record
              </Button>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-medical-red p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center text-white">
                <Users size={20} className="mr-2" />
                <h2 className="text-lg font-bold">Casualty Records</h2>
              </div>
              
              <div className="flex space-x-2 w-full sm:w-auto">
                <div className="relative flex-grow sm:flex-grow-0">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search casualties..."
                    className="bg-white/10 text-white placeholder-white/70 rounded-md px-3 py-1 pl-8 text-sm w-full focus:outline-none focus:ring-1 focus:ring-white/50"
                  />
                  <Search size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/70" />
                </div>
                
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-white/10 text-white rounded-md pl-8 pr-8 py-1 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-white/50"
                  >
                    <option value="ALL">All Status</option>
                    <option value="CRITICAL">Critical</option>
                    <option value="SERIOUS">Serious</option>
                    <option value="STABLE">Stable</option>
                    <option value="RECOVERED">Recovered</option>
                    <option value="DECEASED">Deceased</option>
                  </select>
                  <Filter size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/70" />
                </div>
              </div>
            </div>
            
            <CasualtiesList searchTerm={searchTerm} statusFilter={statusFilter} />
          </div>
        </div>
      } />
      
      <Route path="/new" element={<CasualtyForm />} />
      <Route path="/:id" element={<CasualtyDetails />} />
      <Route path="/:id/edit" element={<CasualtyForm isEdit />} />
    </Routes>
  );
};

export default CasualtiesPage;