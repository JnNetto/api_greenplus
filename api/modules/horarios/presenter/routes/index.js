const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const eventos = require('../controllers/horarios')

router.get('/:idcurso', auth, eventos.getHorariosCurso)
router.put('/alterar/:idcurso', auth, eventos.substituirHorario)

module.exports = router