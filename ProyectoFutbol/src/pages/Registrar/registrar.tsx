import React, { useState } from "react";
import Navbar from "../../components/navBar/navBar";
import "./registrar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registrar: React.FC = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/registrar", {
                nombre,
                email,
                contraseña,
            });
            alert("Registro exitoso pa"); // Maneja la respuesta del servidor
            navigate("/home");
        } catch (error) {
            alert("Error al registrar"); // Maneja el error
        }
    };

    return (
        <>

            <Navbar />

            <div className="registrar-container">
                <div className="form-container">
                    <h1>Registrarse</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contraseña">Contraseña:</label>
                            <input
                                type="password"
                                id="contraseña"
                                name="contraseña"
                                value={contraseña}
                                onChange={(e) => setContraseña(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Registrarse</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Registrar;