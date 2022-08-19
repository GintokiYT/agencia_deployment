import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje, pagina404 } from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

// Request -> Lo que enviamos
// Response -> Lo que express nos responde
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:destino', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

router.get('*', pagina404);

export default router;