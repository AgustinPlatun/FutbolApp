import React from 'react';
import NavBarHome from '../../components/navBarHome/navBarHome';

const VerGrupo: React.FC = () => {
  return (
    <div>
      <NavBarHome />
      <div style={{ marginTop: '80px', textAlign: 'center' }}>
        <h1>Ver Grupos</h1>
        <p>Aquí puedes ver todos los grupos a los que perteneces.</p>
      </div>
    </div>
  );
};

export default VerGrupo;