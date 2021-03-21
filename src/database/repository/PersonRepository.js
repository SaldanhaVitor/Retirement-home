class PersonRepository {
    constructor({ personModel }) {
        this.personModel = personModel;
    }

    async createPerson(data) {
        return await this.personModel.create(data);
    }

    async getPersonByName(name) {
        return await this.personModel.findOne({ name });
    }

    async getPersonById(id) {
        return await this.personModel.find({ "_id": id })
    }

    async getPersonByCoren(coren) {
        return await this.personModel.findOne({ coren });
    }

    async getPeople() {
        return await this.personModel.find();
    }

    async updatePersonByName(name, data) {
        return await this.personModel.updateOne({ name: name }, { $set: data });
    }
}

module.exports = PersonRepository;