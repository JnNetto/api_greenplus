const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const menu = require('../controllers/menu')

router.get('/all', auth,  menu.getAll)
router.get('/:idmenu', auth, menu.getMenu)
router.post('/register', auth, menu.registerMenu)

module.exports = router