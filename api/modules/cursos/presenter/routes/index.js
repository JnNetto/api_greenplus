const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const cursos = require('../controllers/cursos')

//router.get('', auth, (req, res, nex)=> res.json({data: 'ok'}))
router.get('', auth, cursos.getAll)
// router.get('/checktoken', auth, (req, res, nex)=> res.json({data: 'ok'}))
// router.post('/register', cursos.register)
// router.post('/login', cursos.login)

module.exports = router