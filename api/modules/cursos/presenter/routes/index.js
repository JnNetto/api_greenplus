const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const cursos = require('../controllers/cursos')
const curso = require('../controllers/curso')
// const { findId } = require('../../../../sources/memory/cursos')

//router.get('', auth, (req, res, nex)=> res.json({data: 'ok'}))
router.get('',  cursos.getAll)
router.get('/:id', auth, curso.getCurso)
// router.get('/checktoken', auth, (req, res, nex)=> res.json({data: 'ok'}))
router.post('/register', cursos.register)
// router.post('/login', cursos.login)

module.exports = router