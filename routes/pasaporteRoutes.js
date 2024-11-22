const express = require('express');
const {
  getAllPasaportes,
  getPasaporteById,
  getPasaportesByPersona,
  getPasaportesByPais,
  getPasaportesByContinente,
} = require('../controllers/pasaporteController');

const router = express.Router();

router.get('/', getAllPasaportes); // Obtener todos los pasaportes
router.get('/:id', getPasaporteById); // Obtener pasaporte por ID
router.get('/persona/:personaId', getPasaportesByPersona); // Pasaportes por persona
router.get('/pais/:paisId', getPasaportesByPais); // Pasaportes por país
router.get('/continente/:continenteId', getPasaportesByContinente); // Pasaportes por continente

module.exports = router;
