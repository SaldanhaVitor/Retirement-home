class PersonRepository {
    constructor({ priestModel }) {
        this.priestModel = priestModel;
    }

    async createPriest(data) {
        return await this.priestModel.create(data);
    }

    async getPriestByName(name) {
        return await this.priestModel.findOne({ name });
    }

    async getAll() {
        return await this.priestModel.find();
    }

    // async getPersonById(id) {
    //     return await this.personModel.find({ "_id": id })
    // }

    // async getPersonByCoren(coren) {
    //     return await this.personModel.findOne({ coren });
    // }



    // async updatePersonByName(name, data) {
    //     return await this.personModel.updateOne({ name: name }, { $set: data });
    // }
}

module.exports = PersonRepository;