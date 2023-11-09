const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const eventos = require('../controllers/horarios')

router.get('/:idcurso', auth, eventos.getHorariosCurso)
router.put('/sub/:idcurso', eventos.substituirHorario)

module.exports = router