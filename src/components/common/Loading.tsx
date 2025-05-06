import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="w-16 h-16 border-4 border-olive-500 border-t-medical-red rounded-full animate-spin mb-4"></div>
      <p className="text-olive-700 font-medium">Loading...</p>
      <p className="text-xs text-olive-500 mt-2 animate-pulse">Preparing medical supplies...</p>
    </div>
  );
};

export default Loading;