const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const menu = require('../controllers/menu')
// const { findId } = require('../../../../sources/memory/cursos')

//router.get('', auth, (req, res, nex)=> res.json({data: 'ok'}))
router.get('/menu', auth,menu.getAll)
//router.get('/:id', auth, curso.getCurso)
// router.get('/checktoken', auth, (req, res, nex)=> res.json({data: 'ok'}))
//router.post('/register', auth,cursos.register)
// router.post('/login', cursos.login)

module.exports = router