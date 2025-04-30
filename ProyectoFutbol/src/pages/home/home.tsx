import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import NavBarHome from '../../components/navBarHome/navBarHome';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
    <NavBarHome />
      <h1>Home</h1>
      <div className="button-container">
        <button className="btn btn-primary" onClick={() => navigate('/crearGrupo')}>
          Crear Grupo
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/verGrupos')}>
          Ver Grupos
        </button>
      </div>
    </div>
  );
};

export default Home;