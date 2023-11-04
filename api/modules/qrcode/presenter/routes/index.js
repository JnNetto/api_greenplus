const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const qrcode = require('../controllers/qrcode')
// const { findId } = require('../../../../sources/memory/cursos')

//router.get('', auth, (req, res, nex)=> res.json({data: 'ok'}))
router.get('/allqrcode', auth , qrcode.getAll)
router.get('/:idcurso', auth , qrcode.getQrcodeCurso)
router.get('/:idcurso/:idperiodo', auth, qrcode.getQrcodePeriodo)
// router.post('/registermenu', auth , menu.registerMenu)
// router.get('/checktoken', auth, (req, res, nex)=> res.json({data: 'ok'}))
// router.post('/login', cursos.login)

module.exports = router