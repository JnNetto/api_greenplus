const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const qrcode = require('../controllers/qrcode')

router.get('/allqrcode', auth , qrcode.getAll)
router.get('/:idcurso', auth , qrcode.getQrcodeCurso)
router.get('/:idcurso/:idperiodo', auth, qrcode.getQrcodePeriodo)
router.post('/register/:idcurso/:idperiodo', auth , qrcode.register)
router.delete('/delete/:idcurso/:idperiodo', auth, qrcode.delete)


module.exports = router