import React from 'react';

export const SimpleTest: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded shadow my-4">
      <h2 className="text-xl font-bold mb-4">Prueba Simple</h2>
      <p>Si puedes ver este componente, la aplicación está cargando correctamente.</p>
    </div>
  );
};

export default SimpleTest;