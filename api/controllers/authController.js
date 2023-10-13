const AuthService = require('../services/authService')
const authService = new AuthService()

class AuthController {
    static async login(req, res) {
        const { email, password} = req.body
        try {
            const auth = await authService.login({ email, password})
            res.status(200).json(auth)
        } catch (error) {
            res.status(400).json({message: error.message})
            console.log(error)
        }
    }
}

module.exports = AuthController;