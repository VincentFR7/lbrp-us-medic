import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <AlertCircle size={80} className="text-olive-700" />
        </div>
        <h1 className="text-4xl font-bold text-olive-900 mb-4">404 - Page Non Trouvée</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          La page que vous recherchez n'existe pas ou a peut-être été déplacée. Elle a peut-être été classifiée ou redéployée dans un autre secteur.
        </p>
        <div className="space-y-4">
          <Link to="/">
            <Button>
              Retour à la Base (Accueil)
            </Button>
          </Link>
          <div>
            <Link to="/dashboard" className="text-olive-700 hover:text-olive-900 text-sm">
              Aller au Tableau de Bord
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;