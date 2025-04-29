import { FC } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
      <div className="container-fluid">

        <div className="d-flex ms-auto align-items-center">
          <Link to="/register" className="btn btn-primary me-2">
            Registrarse
          </Link>
          <Link to="/login" className="btn btn-outline-light">
            Iniciar Sesión
          </Link>
        </div>

      </div>
    </nav>
  );
};
export default Navbar;
