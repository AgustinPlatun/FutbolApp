import React, { useState } from 'react';
import NavBarHome from '../../components/navBarHome/navBarHome';

const CrearGrupo: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const manejarCrearGrupo = async () => {
    try {
      const response = await fetch('http://localhost:5000/crear_grupo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          descripcion,
          id_usuario: 1, // Reemplaza con el ID del usuario actual
        }),
      });

      if (response.ok) {
        alert('Grupo creado exitosamente');
        setNombre('');
        setDescripcion('');
      } else {
        alert('Error al crear el grupo');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <div>
      <NavBarHome />
      <div style={{ marginTop: '80px', textAlign: 'center' }}>
        <h1>Crear Grupo</h1>
        <p>Aquí puedes crear un nuevo grupo.</p>
        <input
          type="text"
          placeholder="Nombre del grupo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ marginBottom: '10px', padding: '5px', width: '200px' }}
        />
        <br />
        <textarea
          placeholder="Descripción del grupo"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          style={{ marginBottom: '10px', padding: '5px', width: '200px', height: '80px' }}
        />
        <br />
        <button
          onClick={manejarCrearGrupo}
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          + Crear Grupo
        </button>
      </div>
    </div>
  );
};

export default CrearGrupo;