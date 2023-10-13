const { verify, decode } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret')

module.exports = async (req, res, next) => {
    const token = req.headers.authorization
    if(!token) {
        res.status(400).json({message: 'Access token not provided, no authorization to enter!'})
    }
    const [, acessToken] = token.split(" ")

    try {
        verify(acessToken, jsonSecret.secret)
        const { id, email } = await decode(acessToken)
        req.userId = id
        req.userEmail = email
        return next()

    } catch (error) {
        res.status(400).json({ message: 'User not allowed on the system!' })
        console.log(error)
    }
}