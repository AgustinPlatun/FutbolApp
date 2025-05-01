import flask_sqlalchemy
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))
db_path = os.path.join(basedir, "invitacionG.db")
app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_path}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class modelo_invitacion(db.Model):
    __tablename__ = 'invitacion'
    id = db.Column(db.Integer, primary_key=True)
    id_grupo = db.Column(db.Integer, db.ForeignKey('grupo.id'), nullable=False)
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    id_usuario_invitado = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    fecha_envio = db.Column(db.DateTime, default=db.func.current_timestamp())
    grupo = db.relationship('grupo', backref='invitaciones')
    usuario = db.relationship('Usuario', foreign_keys=[id_usuario], backref='invitaciones_enviadas')
    usuario_invitado = db.relationship('Usuario', foreign_keys=[id_usuario_invitado], backref='invitaciones_recibidas')

def crear_invitacion(id_grupo, id_usuario, id_usuario_invitado):
    # Crear una nueva instancia de Invitacion
    nueva_invitacion = invitacion(id_grupo=id_grupo, id_usuario=id_usuario, id_usuario_invitado=id_usuario_invitado)
    # Agregar la nueva invitación a la sesión y confirmar los cambios
    db.session.add(nueva_invitacion)
    db.session.commit()
    return nueva_invitacion

def eliminar_invitacion(id_invitacion, id_usuario_solicitante):
    # Obtener la invitación por su ID
    invitacion_a_eliminar = invitacion.query.get(id_invitacion)
    # Verificar si el usuario solicitante es el creador (admin) de la invitación
    # Eliminar la invitación de la sesión y confirmar los cambios
    db.session.delete(invitacion_a_eliminar)
    db.session.commit()