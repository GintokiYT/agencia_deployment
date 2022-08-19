import crypto from 'crypto';
import { Testimonales } from "../models/Testimoniales.js";

export const guardarTestimonial = async (req, res) => {
  // Validar 
  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if(nombre.trim() === '') {
    errores.push({mensaje: 'El nombre esta vacio'});
  } 

  if(correo.trim() === '') {
    errores.push({mensaje: 'El correo esta vacio'});
  } 

  if(mensaje.trim() === '') {
    errores.push({mensaje: 'El mensaje esta vacio'});
  } 

  if(errores.length > 0) {
    // Consultar testimoniales existentes
    const testimoniales = await Testimonales.findAll();
    const data = {
      pagina: 'Testimoniales',
      errores,
      nombre, 
      correo,
      mensaje,
      testimoniales
    }
    // Mostrar la vista con errores
    console.log(errores);
    res.render('testimoniales', data);
  }
  else {
    // Almacenarlo en la base de datos
    try {
      await Testimonales.create({
        id: crypto.randomUUID({disableEntropyCache : true}),
        nombre,
        correo, 
        mensaje
      });
      res.redirect('/testimoniales');
    } 
    catch(error) {
      console.log(error.message);
    }
  }
};