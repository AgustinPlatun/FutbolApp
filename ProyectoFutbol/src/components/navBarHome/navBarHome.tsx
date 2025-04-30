import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navBarHome.css';

const NavBarHome: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar-home">
      <div className="navbar-container">
        {/* Botón para volver atrás */}
        <button className="btn-back" onClick={() => navigate(-1)}>
          ← Volver
        </button>

        {/* Logo o título */}
        <div className="navbar-title">Mi Aplicación</div>

        {/* Botón para desplegar el menú */}
        <button className="btn-menu" onClick={toggleMenu}>
          ☰ Menú
        </button>
      </div>

      {/* Menú desplegable */}
      {menuOpen && (
        <div className="dropdown-menu">
          <ul>
            <li onClick={() => navigate('/home')}>Inicio</li>
            <li onClick={() => navigate('/crearGrupo')}>Crear Grupo</li>
            <li onClick={() => navigate('/verGrupos')}>Ver Grupos</li>
            <li onClick={() => navigate('/inicioSesion')}>Cerrar Sesión</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBarHome;