const express = require('express')
const swaggerUi = require('swagger-ui-express')
const specs = require('./swagger')
const routes = require('./routes')


const port = 3000;

const app = express()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
routes(app)

app.listen(3000, () => {
    console.log(`Server started on port http://localhost:${3000}`);
});

// app.listen(port, () => {
//     console.log(`Servidor escutando em http://localhost:${port} com sucesso!`)
// })

module.exports = app;