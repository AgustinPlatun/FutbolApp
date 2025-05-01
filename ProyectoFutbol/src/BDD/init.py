import sqlite3 
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

sqlite3.connect('Usuarios.db')
