const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const eventos = require('../controllers/eventos')

router.get('/all', auth, eventos.getAllEventos)
router.get('/:idcurso', auth, eventos.getEventosCurso)
router.post('/register/:idcurso', auth, eventos.register)
router.delete('/delete/:idcurso/:idevento', auth, eventos.delete)

module.exports = router