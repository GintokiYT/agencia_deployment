import Sequelize from 'sequelize';
import db from '../config/db.js';

const testimonales = {
  id: { type: Sequelize.STRING, primaryKey: true},
  nombre: { type: Sequelize.STRING },
  correo: { type: Sequelize.STRING },
  mensaje: { type: Sequelize.STRING },
};

export const Testimonales = db.define('testimoniales', testimonales);
