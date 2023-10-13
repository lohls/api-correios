database = require('../models')
const { hash} = require('bcryptjs')
const { v4: uuidv4} = require('uuid')
const Service = require('./Service')

class UserService extends Service {
    constructor() {
        super('users')
    }
    async create(dto) {
        const user = await database.users.findOne({
            where: {
                name: dto.name
            }
        })
        if(user) {
            throw new Error('User not registered in our system!')
        }
        try {
            const passwordHash = await hash(dto.password, 8)

            const newUser = await database.users.create({
                id: uuidv4(),
                name: dto.name,
                email: dto.email,
                password: passwordHash
            })
            return newUser;
        } catch (error) {
            throw new Error('Error creating new user!')
        }
    }

    async getAllUsersAndOrders() {
        const user = await database.users.findAll({
            include: [{
                model: database.orders,
                as:'orders',
                atributtes: ['id', 'number', 'status']
            }]
        })
        return user
    }

    async getUserAndOrder(id) {
        const user = await database.users.findOne({
            where: { id: id}, 
            include: [{

                model: database.orders,
                as: 'orders',
                atributtes: ['id', 'number', 'status']
            }]
        })
        return user;
    }
}
    


module.exports = UserService;