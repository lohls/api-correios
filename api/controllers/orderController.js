const OrderService = require('../services/orderService')
const orderService = new OrderService()

class OrderController {
    static async create(req, res) {
        const { number, status, userId} = req.body

        try {
            const newOrder = await orderService.create({number, status, userId})
            res.status(201).json(newOrder)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
    static async getOrders(req, res) {
        const order = await orderService.getRecords()
        res.status(200).json(order)
    }
    static async getOrderById(req, res) {
        const {id} = req.params

        try {
            const orderById = await orderService.getRecordsById(id)
            res.status(200).json(orderById)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
    static async deleteOrder(req, res) {
        const {id} = req.params

        try {
            const verifyOrder = await orderService.getRecordsById(id)
            if(!verifyOrder) {
                res.status(400).json('Order not found in our system')
            } else {
                await orderService.deleteRecord(id)
                res.status(200).json('Order deleted successfully!')
            }
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
    static async updateOrder(req, res) {
        const {id} = req.params
        const newData = req.body

        try {
            
            await orderService.updateRecords(newData, id)
            const verifyOrder = await orderService.getRecordsById(id)
            res.status(200).json(verifyOrder)
        
            } 
            catch (error) {
            res.status(400).json({message: error.message})
        }
    }}


module.exports = OrderController;