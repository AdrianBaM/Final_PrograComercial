const { Pasaporte, Persona, Pais, Continente } = require('../models')

const getAllPasaportes = async (req, res) => {
  try {
    const pasaportes = await Pasaporte.findAll()
    res.json(pasaportes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getPasaporteById = async (req, res) => {
  try {
    const pasaporte = await Pasaporte.findByPk(req.params.id)
    if (!pasaporte) return res.status(404).json({ error: 'El pasaporte no existe' })
    res.json(pasaporte)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getPasaportesByPersona = async (req, res) => {
  try {
    const pasaportes = await Pasaporte.findAll({
      where: { idPersona: req.params.personaId },
      include: [Persona],
    })
    res.json(pasaportes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getPasaportesByPais = async (req, res) => {
  try {
    const pasaportes = await Pasaporte.findAll({
      where: { idPais: req.params.paisId },
      include: [Pais],
    })
    res.json(pasaportes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const getPasaportesByContinente = async (req, res) => {
  try {
    const pasaportes = await Pasaporte.findAll({
      where: { idContinente: req.params.continenteId },
      include: [Continente],
    })
    res.json(pasaportes)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllPasaportes,
  getPasaporteById,
  getPasaportesByPersona,
  getPasaportesByPais,
  getPasaportesByContinente,
}
