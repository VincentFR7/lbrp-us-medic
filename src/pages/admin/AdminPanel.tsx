import React from 'react';
import { Shield, Users, Settings, FileText } from 'lucide-react';

const AdminPanel: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-olive-900">Panneau d'Administration</h1>
          <p className="text-gray-600">Gestion du 188th Medical Battalion</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Users size={24} className="text-olive-700 mr-2" />
            <h2 className="text-xl font-bold">Gestion des Utilisateurs</h2>
          </div>
          <p className="text-gray-600 mb-4">Gérer les comptes et les permissions des membres.</p>
          <button className="text-olive-700 hover:text-olive-900 font-medium">
            Accéder →
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Shield size={24} className="text-olive-700 mr-2" />
            <h2 className="text-xl font-bold">Rôles et Permissions</h2>
          </div>
          <p className="text-gray-600 mb-4">Configurer les niveaux d'accès et les autorisations.</p>
          <button className="text-olive-700 hover:text-olive-900 font-medium">
            Accéder →
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <FileText size={24} className="text-olive-700 mr-2" />
            <h2 className="text-xl font-bold">Journaux d'Activité</h2>
          </div>
          <p className="text-gray-600 mb-4">Consulter l'historique des actions et des modifications.</p>
          <button className="text-olive-700 hover:text-olive-900 font-medium">
            Accéder →
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-4">
            <Settings size={24} className="text-olive-700 mr-2" />
            <h2 className="text-xl font-bold">Configuration</h2>
          </div>
          <p className="text-gray-600 mb-4">Paramètres généraux du système.</p>
          <button className="text-olive-700 hover:text-olive-900 font-medium">
            Accéder →
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;