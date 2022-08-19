import { Viajes } from '../models/Viaje.js';
import { Testimonales } from '../models/Testimoniales.js';

export const paginaInicio = async (req, res) => {
  try {

    const promiseDB = [];
    promiseDB.push( await Viajes.findAll({limit: 3}) );
    promiseDB.push( await Testimonales.findAll({limit: 3}) );

    const resultado = await Promise.all(promiseDB);
    const data = {
      pagina: 'Inicio',
      clase: 'home',
      viajes: resultado[0],
      testimoniales: resultado[1]
    };
    res.render('inicio', data);
  }
  catch(error) {
    console.log(error.message);
  }
};

export const paginaNosotros = (req, res) => {
  const data = {
    pagina: 'Nosotros',
  };
  res.render('nosotros', data);
};

export const paginaViajes = async (req, res) => {
  // Consultar a la BD
  const viajes = await Viajes.findAll();
  console.log(viajes)
  const data = {
    pagina: 'Proximos Viajes',
    viajes,
  };
  res.render('viajes', data);
};

export const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimonales.findAll();
    const data = {
      pagina: 'Testimoniales',
      testimoniales
    };
    res.render('testimoniales', data);
  }
  catch(error) {
    console.log(error.message);
  }
};

// Muestra un viaje por su slug
export const paginaDetalleViaje = async (req, res) => {
  const { destino } = req.params;

  try {
    const resultado = await Viajes.findOne({ where: { slug: destino }});
    res.render('viaje', {
      pagina: 'Información Viaje',
      resultado,
    });
  } 
  catch (e) {
    console.log(e.message);  
  }
}

export const pagina404 = (req, res, next) => {
  const data = {
    pagina: '404',
  };
  res.status(404).render('404', data);
};