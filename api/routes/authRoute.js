const {Router} = require('express')
const AuthController = require('../controllers/authController')
const router = Router()

router  
    .post('/auth', AuthController.login)

    module.exports = router;