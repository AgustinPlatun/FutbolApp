import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import './Navbar.css';

const Navbar: FC = () => {
  const navigate = useNavigate(); // Hook para redirección

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
      <div className="container-fluid">
        <div className="logo">
          Logo
        </div>
        <div className="mx-auto">
          <button className="btn btn-light" onClick={() => navigate('/')}>
            Inicio
          </button>
        </div>
        <div className="d-flex ms-auto align-items-center">
          {/* Botón para Registrarse */}
          <button
            className="btn btn-primary me-2"
            onClick={() => navigate('/registrar')}
          >
            Registrarse
          </button>
          {/* Botón para Iniciar Sesión */}
          <button
            className="btn btn-outline-light"
            onClick={() => navigate('/inicioSesion')}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;