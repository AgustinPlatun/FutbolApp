import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InicioSesion.css'; // Archivo de estilos CSS
import Navbar from '../../components/navBar/navBar';

const InicioSesion: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const manejarEnvio = () => {
    if (usuario === 'admin' && password === '1234') {
      alert('Inicio de sesión exitoso!');
      navigate('/dashboard');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div>
        <div> <Navbar/> </div> 
        <div className="login-container">
        
        <div className="login-box">
            <h2>Iniciar Sesión</h2>
            <input 
            type="text" 
            placeholder="Usuario" 
            value={usuario} 
            onChange={(e) => setUsuario(e.target.value)} 
            />
            <input 
            type="password" 
            placeholder="Contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={manejarEnvio}>Ingresar</button>
        </div>
        </div>
    </div>
  );
};

export default InicioSesion;