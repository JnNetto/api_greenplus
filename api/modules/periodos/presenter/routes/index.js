const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const periodo = require('../controllers/periodo')

router.get('/all', auth, periodo.getAll)
router.get('/:idcurso', auth,periodo.getPeriodosCurso)
router.get('/:id/:periodo', auth, periodo.getPeriodo)


module.exports = router