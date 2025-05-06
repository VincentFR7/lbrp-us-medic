import React, { useState } from 'react';
import { MessageSquare, Search, Plus } from 'lucide-react';
import Button from '../../components/common/Button';

const ForumPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-olive-900">Forum Médical</h1>
          <p className="text-gray-600">Discussions et échanges entre le personnel médical</p>
        </div>

        <Button icon={<Plus size={16} />}>
          Nouveau Sujet
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-olive-800 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center text-khaki-100">
            <MessageSquare size={20} className="mr-2" />
            <h2 className="text-lg font-bold">Discussions</h2>
          </div>

          <div className="relative flex-grow sm:flex-grow-0">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher dans le forum..."
              className="bg-white/10 text-white placeholder-white/70 rounded-md px-3 py-1 pl-8 text-sm w-full focus:outline-none focus:ring-1 focus:ring-white/50"
            />
            <Search size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/70" />
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Annonces Importantes</h3>
            <p className="text-gray-600">Section réservée aux annonces officielles du 188th Medical Battalion.</p>
          </div>

          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Procédures Médicales</h3>
            <p className="text-gray-600">Discussions sur les protocoles et procédures médicales.</p>
          </div>

          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Rapports de Mission</h3>
            <p className="text-gray-600">Comptes rendus des missions médicales sur le terrain.</p>
          </div>

          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">Formation Continue</h3>
            <p className="text-gray-600">Ressources et discussions sur la formation médicale.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;