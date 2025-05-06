import React from 'react';
import { Book, Search } from 'lucide-react';

const MedicalGuidesPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-olive-900">Guides Médicaux de Terrain</h1>
          <p className="text-gray-600">Accédez aux procédures et protocoles médicaux essentiels</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-medical-red p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center text-white">
            <Book size={20} className="mr-2" />
            <h2 className="text-lg font-bold">Guides Disponibles</h2>
          </div>

          <div className="relative flex-grow sm:flex-grow-0">
            <input
              type="text"
              placeholder="Rechercher des guides..."
              className="bg-white/10 text-white placeholder-white/70 rounded-md px-3 py-1 pl-8 text-sm w-full focus:outline-none focus:ring-1 focus:ring-white/50"
            />
            <Search size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white/70" />
          </div>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Protocole de Triage sur le Terrain</h3>
              <p className="text-gray-600 text-sm mb-4">Procédures standard pour le triage sur le champ de bataille et l'évaluation des blessés.</p>
              <button className="text-medical-red hover:text-medical-red-dark font-medium text-sm">
                Voir le Guide →
              </button>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Soins des Traumatismes de Combat</h3>
              <p className="text-gray-600 text-sm mb-4">Directives pour le traitement des blessures et traumatismes liés au combat.</p>
              <button className="text-medical-red hover:text-medical-red-dark font-medium text-sm">
                Voir le Guide →
              </button>
            </div>

            <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg mb-2">Procédures d'Urgence</h3>
              <p className="text-gray-600 text-sm mb-4">Guides étape par étape pour les procédures médicales d'urgence courantes.</p>
              <button className="text-medical-red hover:text-medical-red-dark font-medium text-sm">
                Voir le Guide →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalGuidesPage;