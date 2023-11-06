const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const menu = require('../controllers/menu')
// const { findId } = require('../../../../sources/memory/cursos')

//router.get('', auth, (req, res, nex)=> res.json({data: 'ok'}))
router.get('/allmenu', /*auth,*/  menu.getAll)
router.get('/:idmenu', /*auth,*/ menu.getMenu)
router.post('/registermenu', /*auth,*/ menu.registerMenu)
// router.get('/checktoken', auth, (req, res, nex)=> res.json({data: 'ok'}))
// router.post('/login', cursos.login)

module.exports = router