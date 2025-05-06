import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Calendar, Users, BookOpen, MessageSquare } from 'lucide-react';
import Button from '../components/common/Button';

const HomePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col space-y-10">
      {/* Section Héro */}
      <section className="relative">
        <div className="bg-[url('https://images.pexels.com/photos/6692756/pexels-photo-6692756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center h-96 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-olive-900/90 to-olive-900/70 flex flex-col justify-center px-8 md:px-16">
            <h1 className="text-4xl md:text-5xl font-stencil text-khaki-100 mb-4">
              188<sup>ème</sup> BATAILLON MÉDICAL
            </h1>
            <p className="text-khaki-200 text-lg md:text-xl max-w-2xl mb-6">
              Fournir un soutien médical à nos troupes sur le champ de bataille. Rejoignez notre corps médical et aidez à sauver des vies sur le théâtre européen des opérations.
            </p>
            {user ? (
              <Link to="/dashboard">
                <Button size="lg" className="animate-pulse">
                  Accéder au Tableau de Bord
                </Button>
              </Link>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                  <Button size="lg">
                    Se Connecter
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" variant="outline" className="bg-olive-800/30 text-khaki-100 border-khaki-300">
                    S'inscrire
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-olive-600 hover:shadow-lg transition-shadow duration-300">
          <Calendar size={48} className="text-olive-600 mb-4" />
          <h2 className="text-xl font-bold mb-2">Rendez-vous Médicaux</h2>
          <p className="text-gray-600">Planifiez et gérez les rendez-vous avec notre personnel médical. Service médical rapide et efficace pour tout le personnel.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-medical-red hover:shadow-lg transition-shadow duration-300">
          <Users size={48} className="text-medical-red mb-4" />
          <h2 className="text-xl font-bold mb-2">Registre des Blessés</h2>
          <p className="text-gray-600">Système complet de gestion des blessés pour suivre les blessures, les traitements et les progrès de guérison.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-khaki-700 hover:shadow-lg transition-shadow duration-300">
          <BookOpen size={48} className="text-khaki-700 mb-4" />
          <h2 className="text-xl font-bold mb-2">Guides Médicaux</h2>
          <p className="text-gray-600">Accédez aux guides médicaux détaillés et aux protocoles de traitement pour le personnel médical.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-olive-800 hover:shadow-lg transition-shadow duration-300">
          <MessageSquare size={48} className="text-olive-800 mb-4" />
          <h2 className="text-xl font-bold mb-2">Forums Médicaux</h2>
          <p className="text-gray-600">Collaborez avec d'autres personnels médicaux, partagez vos expériences et discutez des procédures médicales.</p>
        </div>
      </section>

      {/* Section À Propos */}
      <section className="bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-4">À propos du 188<sup>ème</sup> Bataillon Médical</h2>
            <p className="mb-4 text-gray-700">
              Le 188ème Bataillon Médical fournit un soutien médical complet aux forces alliées sur le théâtre européen des opérations. Notre personnel médical dévoué est formé pour prodiguer des soins vitaux en situation de combat.
            </p>
            <p className="mb-4 text-gray-700">
              Des hôpitaux de campagne aux procédures d'évacuation, notre bataillon s'assure que les soldats blessés reçoivent un traitement médical rapide et efficace, améliorant significativement les taux de survie sur le champ de bataille.
            </p>
            <p className="text-gray-700">
              Rejoignez nos rangs et faites partie d'un système de soutien crucial pour nos forces combattantes. Que vous soyez médecin, infirmier ou personnel de soutien, vos compétences sont nécessaires sur le front.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/4210653/pexels-photo-4210653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Personnel médical" 
              className="rounded-lg shadow-md h-auto max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Appel à l'Action */}
      <section className="bg-olive-800 text-khaki-100 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Rejoignez Notre Corps Médical</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Le 188ème Bataillon Médical recherche du personnel médical dévoué pour soutenir nos troupes. Que vous soyez médecin de terrain, chirurgien ou personnel de soutien, votre service est vital pour notre mission.
        </p>
        {!user && (
          <Link to="/register">
            <Button size="lg" variant="outline" className="border-khaki-300 text-khaki-100 hover:bg-olive-700">
              S'inscrire Maintenant
            </Button>
          </Link>
        )}
      </section>
    </div>
  );
};

export default HomePage;