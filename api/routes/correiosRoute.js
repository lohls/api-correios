const { Router} = require('express')
const MailController = require('../controllers/mailController')

const router = Router()

router 
    .post('/consultacep', MailController.consultCep)
    .post('/calcprecoprazo', MailController.calculatePriceDeadline)
    .post('/rastrearencomenda/', MailController.trackOrders)


module.exports = router;