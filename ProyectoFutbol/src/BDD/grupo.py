import flask_sqlalchemy
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))
db_path = os.path.join(basedir, "grupo.db")
app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{db_path}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class grupo(db.Model):
    __tablename__ = 'grupo'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.String(200), nullable=False)
    id_usuario = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)
    usuario = db.relationship('Usuario', backref='grupos')

@app.route('/crear_grupo', methods=['POST'])
def crear_grupo (nombre, descripcion, id_usuario):
    # Crear una nueva instancia de Grupo
    nuevo_grupo = grupo(nombre=nombre, descripcion=descripcion, id_usuario=id_usuario)
    
    # Agregar el nuevo grupo a la sesión y confirmar los cambios
    db.session.add(nuevo_grupo)
    db.session.commit()
    
    return nuevo_grupo

def obtener_grupos_por_usuario(id_usuario):
    # Obtener todos los grupos asociados a un usuario específico
    grupos = grupo.query.filter_by(id_usuario=id_usuario).all()
    
    return grupos

def eliminar_grupo(id_grupo, id_usuario_solicitante):
    # Obtener el grupo por su ID
    grupo_a_eliminar = grupo.query.get(id_grupo)
    
    if grupo_a_eliminar:
        # Verificar si el usuario solicitante es el creador (admin) del grupo
        if grupo_a_eliminar.id_usuario == id_usuario_solicitante:
            # Eliminar el grupo de la sesión y confirmar los cambios
            db.session.delete(grupo_a_eliminar)
            db.session.commit()
            return True
        else:
            # El usuario no tiene permisos para eliminar el grupo
            return False
    else:
        # El grupo no existe
        return False
    
def modificar_nombre_grupo(id_grupo, nuevo_nombre, id_usuario_solicitante):
    # Obtener el grupo por su ID
    grupo_a_modificar = grupo.query.get(id_grupo)
    
    if grupo_a_modificar:
        # Verificar si el usuario solicitante es el creador (admin) del grupo
        if grupo_a_modificar.id_usuario == id_usuario_solicitante:
            # Modificar el nombre del grupo
            grupo_a_modificar.nombre = nuevo_nombre
            db.session.commit()
            return True
        else:
            # El usuario no tiene permisos para modificar el grupo
            return False
    else:
        # El grupo no existe
        return False
    
def modificar_descripcion_grupo(id_grupo, nueva_descripcion, id_usuario_solicitante):
    # Obtener el grupo por su ID
    grupo_a_modificar = grupo.query.get(id_grupo)
    
    if grupo_a_modificar:
        # Verificar si el usuario solicitante es el creador (admin) del grupo
        if grupo_a_modificar.id_usuario == id_usuario_solicitante:
            # Modificar la descripción del grupo
            grupo_a_modificar.descripcion = nueva_descripcion
            db.session.commit()
            return True
        else:
            # El usuario no tiene permisos para modificar el grupo
            return False
    else:
        # El grupo no existe
        return False    
