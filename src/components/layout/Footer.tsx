import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-olive-900 text-khaki-100 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-stencil text-xl tracking-wider mb-2">
              188<sup>th</sup> MEDICAL BATTALION
            </div>
            <p className="text-sm opacity-75">
              Role-playing forum for the 188th Medical Battalion personnel.
            </p>
          </div>
          
          <div className="text-center mb-4 md:mb-0">
            <img 
              src="https://images.pexels.com/photos/6499171/pexels-photo-6499171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Medical insignia" 
              className="h-16 w-16 mx-auto mb-2 rounded-full border border-khaki-300"
            />
            <p className="text-xs">
              "Saving lives on the battlefield"
            </p>
          </div>
          
          <div className="text-sm text-right">
            <p className="mb-1">Role-playing purposes only</p>
            <p className="mb-1">No official affiliation with the US Army</p>
            <p className="flex items-center justify-center md:justify-end">
              <span>Made with</span>
              <Heart size={14} className="mx-1 text-medical-red" fill="currentColor" />
              <span>in {currentYear}</span>
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-olive-700 text-xs text-center opacity-75">
          This is a fictional role-playing website. All events, characters, and entities are fictional.
          Any resemblance to actual events, organizations, or persons is purely coincidental.
        </div>
      </div>
    </footer>
  );
};

export default Footer;