import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save } from 'lucide-react';
import Button from '../../components/common/Button';

interface CasualtyFormProps {
  isEdit?: boolean;
}

const CasualtyForm: React.FC<CasualtyFormProps> = ({ isEdit = false }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implémenter la soumission du formulaire
    setLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <Button
          variant="ghost"
          icon={<ArrowLeft size={16} />}
          onClick={() => navigate('/casualties')}
        >
          Retour aux Blessés
        </Button>
        <h1 className="text-3xl font-bold text-olive-900">
          {isEdit ? 'Modifier le Dossier du Blessé' : 'Nouveau Dossier de Blessé'}
        </h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Nom Complet
              </label>
              <input
                type="text"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-red focus:ring-medical-red"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Matricule
              </label>
              <input
                type="text"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-red focus:ring-medical-red"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Unité/Division
              </label>
              <input
                type="text"
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-red focus:ring-medical-red"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                État
              </label>
              <select
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-red focus:ring-medical-red"
                required
              >
                <option value="CRITICAL">Critique</option>
                <option value="SERIOUS">Grave</option>
                <option value="STABLE">Stable</option>
                <option value="RECOVERED">Rétabli</option>
                <option value="DECEASED">Décédé</option>
              </select>
            </div>

            <div className="col-span-2 space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Description de l'Incident
              </label>
              <textarea
                rows={4}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-red focus:ring-medical-red"
                required
              />
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="secondary"
              onClick={() => navigate('/casualties')}
            >
              Annuler
            </Button>
            <Button
              type="submit"
              variant="danger"
              icon={<Save size={16} />}
              loading={loading}
            >
              {isEdit ? 'Mettre à jour' : 'Créer le Dossier'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CasualtyForm;