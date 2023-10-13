const Service = require('./Service')
const database = require('../models')
const { v4: uuidv4} = require('uuid')

class OrderService extends Service {
    constructor() {
        super
        ('orders')
    }
    async create(dto) {
        const order = await database.orders.findOne({
            where: {
                number: dto.number
            }
        })
        if(order) {
            throw new Error('Order already exists in our database!')
        }
        try {
            const user = await database.users.findOne({
                where: {
                    id: dto.userId
                }
            });
            if(!user) {
                throw new Error('User not found!')
            }
            const newOrder = await database.orders.create({
                id: uuidv4(),
                number: dto.number,
                status: dto.status,
                userId: user.id
            })
            return newOrder;
        } catch (error) {
            console.log(error)
            throw new Error('Error creating order!')
        }
    }
}
module.exports = OrderService;