const database = require('../models')

class Service{
    constructor(model) {
        this.model = model
    }

    async create(data) {
        return database[this.model].create(data)
    }
    async getRecords() {
        return database[this.model].findAll()
    }
    async getRecordsById(id) {
        return database[this.model].findOne({ where: { id: id}})
    }
    async deleteRecord(id) {
        return database[this.model].destroy({ where: { id: id}})
    }
    async updateRecords(novosDados, id) {
        return database[this.model].update(novosDados, { where: { id: id } })
    }
}

module.exports = Service;