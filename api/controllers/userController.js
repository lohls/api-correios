const { hash } = require('bcryptjs')
const UserService = require('../services/userService')
const userService = new UserService()

class UserController {
    static async create(req, res) {
        const {name, email, password } = req.body

        try {
            const newUser = await userService.create({name, email, password})
            res.status(201).json(newUser)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
    static async getUsers(req, res) {
        const users = await userService.getRecords()
        res.status(200).json(users)
    }

    static async getAllUserAndOrderById(req, res){
        const { id} = req.params

        try {
            const userById = await userService.getUserAndOrder(id)
            res.status(200).json(userById)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    static async deleteUser(req, res) {
        const {id} = req.params

        try {
            const verifyUser = await userService.getRecordsById(id)
           
                await userService.deleteRecord(id)
                res.status(200).json({sucess: 'User deleted successfully!'})
            
        } catch (error) {
            res.status(200).json({message: error.message})
        }
    }

    static async updateUser(req, res) {
        const  novosDados = req.body
        const { id } = req.params

        if (novosDados.password) {
            const passwordHash = await hash(novosDados.password, 8);
            novosDados.password = passwordHash;
        }

        try {
            await userService.updateRecords(novosDados, id)
            const dadosAtt = await userService.getRecordsById(id)
            res.status(200).json(dadosAtt)
            console.log(id)
        } catch (error) {
            res.status(400).json({message: error.message})
            console.log(error)
        }
    }
}

module.exports = UserController;