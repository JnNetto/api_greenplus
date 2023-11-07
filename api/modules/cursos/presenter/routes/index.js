const express = require('express')
const router = express.Router()
const auth = require('../../../../core/middleware/auth')

const curso = require('../controllers/curso')

router.get('', auth, curso.getAll)
router.get('/:id', auth, curso.getCurso)
router.post('/register', auth,curso.register)

module.exports = router