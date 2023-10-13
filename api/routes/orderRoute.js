const {Router} = require('express')
const OrderController = require('../controllers/orderController')

const router = Router()

router  
    .post('/orders', OrderController.create)
    .get('/orders', OrderController.getOrders)
    .get('/orders/:id', OrderController.getOrderById)
    .delete('/orders/:id', OrderController.deleteOrder)
    .put('/orders/:id', OrderController.updateOrder)

module.exports = router;