const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const periodos = require('../controllers/periodos')
const periodo = require('../controllers/periodo')
// const { findId } = require('../../../../sources/memory/cursos')

//router.get('', auth, (req, res, nex)=> res.json({data: 'ok'}))
router.get('/all',  periodos.getAll)
router.get('/:id/:periodo',  periodo.getPeriodo)
// router.get('/checktoken', auth, (req, res, nex)=> res.json({data: 'ok'}))
// router.post('/register', cursos.register)
// router.post('/login', cursos.login)

module.exports = router