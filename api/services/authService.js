const database = require('../models')
const { compare } = require('bcryptjs')
const {sign } = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret.js')

class AuthService {
    async login(dto) {

        const user = await database.users.findOne({
            attributes: ['id', 'email', 'password'],
            where: {
                email: dto.email
            }
        })
        if (!user) {
            throw new Error('User not registered in our system!')
        }
        
        const passwords = await compare(dto.password, user.password)

        if(!passwords) {
            throw new Error('Invalid username or password!')
        }
        const acessToken = sign({
            id: user.id,
            email: user.email
        },
        jsonSecret.secret, {
            expiresIn: 1000000
        })
        return { acessToken }
    }
}

module.exports = AuthService;