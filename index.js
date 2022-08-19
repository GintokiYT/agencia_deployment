import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

import dotenv from 'dotenv'
dotenv.config({ path: 'variables.env'});

const app = express();

// Conectar la base de datos
db.authenticate()
  .then( () => console.log('Base de datos conectada'))
  .catch( e => console.log(e.message));

// Habilitar pug
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
  const anioActual = new Date().getFullYear();
  res.locals.anioActual = anioActual;
  return next();
});

// Agregar el body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar router
app.use('/', router);

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen( port, host, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});