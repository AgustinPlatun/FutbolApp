import React from 'react';
import NavBarHome from '../../components/navBarHome/navBarHome';

const CrearGrupo: React.FC = () => {
  return (
    <div>
      <NavBarHome />
      <div style={{ marginTop: '80px', textAlign: 'center' }}>
        <h1>Crear Grupo</h1>
        <p>Aquí puedes crear un nuevo grupo.</p>
      </div>
    </div>
  );
};

export default CrearGrupo;