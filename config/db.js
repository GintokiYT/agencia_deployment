import Sequelize from 'sequelize';
import dotenv from 'dotenv'
dotenv.config({ path: 'variables.env'});

const config = {
  host: 'bhkyvgakvrjdyxe4uvjx-mysql.services.clever-cloud.com',
  port: '3306',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorAliases: false,
};

const db = new Sequelize('bhkyvgakvrjdyxe4uvjx', 'u7wxzpzlecv5acgz', 'JNva6yMEHadtEMt5vQcE', config);

export default db;



