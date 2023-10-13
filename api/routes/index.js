const bodyParser = require('body-parser')
const users = require('./userRoute')
const orders = require('./orderRoute')
const auth = require('./authRoute')
const correios = require('./correiosRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        auth,
        users,
        correios,
        orders,
    )
}