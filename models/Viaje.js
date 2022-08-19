import Sequelize from 'sequelize';
import db from '../config/db.js';

const viajes = {
  titulo: { type: Sequelize.STRING },
  precio: { type: Sequelize.DOUBLE },
  fecha_ida: { type: Sequelize.DATE },
  fecha_vuelta: { type: Sequelize.DATE },
  imagen: { type: Sequelize.STRING },
  descripcion: { type: Sequelize.STRING },
  disponibles: { type: Sequelize.STRING },
  slug: { type: Sequelize.STRING },
};

export const Viajes = db.define('viajes', viajes);
