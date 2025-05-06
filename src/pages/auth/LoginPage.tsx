import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import { LogIn } from 'lucide-react';
import Button from '../../components/common/Button';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await login(username, password);
      toast.success('Connexion réussie');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Échec de la connexion');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-olive-700 p-6 text-khaki-100">
          <h2 className="text-2xl font-bold text-center">Connexion</h2>
          <p className="text-center mt-2 text-khaki-200">Accédez à votre compte du 188ème Médical</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Nom d'utilisateur
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500"
              placeholder="Entrez votre nom d'utilisateur"
              disabled={isLoading}
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-olive-500"
              placeholder="Entrez votre mot de passe"
              disabled={isLoading}
            />
          </div>
          
          <Button
            type="submit"
            className="w-full"
            loading={isLoading}
            icon={<LogIn size={18} />}
          >
            Se Connecter
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Vous n'avez pas de compte ?{' '}
              <Link to="/register" className="text-olive-700 hover:underline font-medium">
                S'inscrire
              </Link>
            </p>
          </div>
        </form>
        
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <div className="text-xs text-gray-500 text-center">
            <p>Comptes de démonstration :</p>
            <p className="mt-1">Admin : nom d'utilisateur : admin, mot de passe : admin123</p>
            <p>Médecin : nom d'utilisateur : medic, mot de passe : medic123</p>
            <p>Soldat : nom d'utilisateur : soldier, mot de passe : soldier123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;