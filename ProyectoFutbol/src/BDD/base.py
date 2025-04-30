from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
from werkzeug.security import generate_password_hash, check_password_hash

# Inicialización de la aplicación y la base de datos
app = Flask(__name__)
CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))
db_path = os.path.join(basedir, "Usuarios.db")
app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_path}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Modelo para la tabla de usuarios
class Usuario(db.Model):
    __tablename__ = 'usuarios'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    contraseña = db.Column(db.String(200), nullable=False)

# Crear las tablas en la base de datos
with app.app_context():
    db.create_all()

# Ruta para registrar un nuevo usuario
@app.route('/registrar', methods=['POST'])
def register():
    data = request.get_json()
    contraseña_hasheada = generate_password_hash(data['contraseña'])
    # Verificar si el usuario ya existe
    usuario_existente = Usuario.query.filter_by(email=data['email']).first()
    if usuario_existente:
        return jsonify({'message': 'El usuario ya existe'}), 400
    
    nuevo_usuario = Usuario(
        nombre=data['nombre'],
        email=data['email'],
        contraseña=contraseña_hasheada
    )
    db.session.add(nuevo_usuario)
    db.session.commit()
    return jsonify({'message': 'Usuario registrado exitosamente'}), 201

# Ruta para iniciar sesión
@app.route('/inicioSesion', methods=['POST'])
def inicio_sesion():
    data = request.get_json()
    usuario = Usuario.query.filter_by(email=data['email']).first()
    if not usuario or not check_password_hash(usuario.contraseña, data['contraseña']):
        return jsonify({'message': 'Credenciales inválidas'}), 401
    return jsonify({'message': 'Inicio de sesión exitoso', 'usuario': usuario.nombre}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)