from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# Inicialización de la aplicación y la base de datos
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///futbol.db'  # Cambia esto según tu base de datos
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
CORS(app)

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
    nuevo_usuario = Usuario(
        nombre=data['nombre'],
        email=data['email'],
        contraseña=data['contraseña']
    )
    db.session.add(nuevo_usuario)
    db.session.commit()
    return jsonify({'message': 'Usuario registrado exitosamente'}), 201
if __name__ == '__main__':
    app.run(debug=True, port=5000)
    
# Ruta para iniciar sesión