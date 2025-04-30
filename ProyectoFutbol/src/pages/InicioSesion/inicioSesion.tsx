import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InicioSesion.css'; // Archivo de estilos CSS
import Navbar from '../../components/navBar/navBar';

const InicioSesion: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const manejarEnvio = async () => {
    try {
      const response = await fetch("http://localhost:5000/inicioSesion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: usuario, // Enviar el email como "usuario"
          contraseña: password, // Enviar la contraseña
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Inicio de sesión exitoso, bienvenido ${data.nombre}!`);
        navigate('/'); // Redirige al dashboard
      } else {
        const errorData = await response.json();
        alert(errorData.error); // Muestra el mensaje de error del backend
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <div>
      <div> <Navbar /> </div>
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