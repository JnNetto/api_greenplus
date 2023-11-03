const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const menu = require('../controllers/menu')
// const { findId } = require('../../../../sources/memory/cursos')

//router.get('', auth, (req, res, nex)=> res.json({data: 'ok'}))
router.get('/Allmenu', auth , menu.getAll)
router.get('/:idMenu', auth , menu.getMenu)
router.post('/registerMenu', auth , menu.registerMenu)
// router.get('/checktoken', auth, (req, res, nex)=> res.json({data: 'ok'}))
// router.post('/login', cursos.login)

module.exports = router