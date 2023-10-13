const Router = require('express')
const UserController = require('../controllers/userController')
const autenticacao = require('../middleware/autenticacao')

const router = Router()

router.use(autenticacao)

router  
    .post('/users', UserController.create)
    .get('/users', UserController.getUsers)
    .get('/users/:id', UserController.getAllUserAndOrderById)
    .delete('/users/:id', UserController.deleteUser)
    .put('/users/:id', UserController.updateUser)

module.exports = router;