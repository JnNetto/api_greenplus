const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const users = require('../controllers/users')

router.get('', auth, (req, res, nex)=> res.json({data: 'ok'}))
router.get('/profile', auth, users.findUser)
router.get('/checktoken', auth, (req, res, nex)=> res.json({data: 'ok'}))
router.post('/register', users.register)
router.post('/login', users.login)

module.exports = router