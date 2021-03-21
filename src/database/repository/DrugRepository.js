class DrugRepository {
    constructor({ drugModel }) {
        this.drugModel = drugModel;
    }

    async createDrug(data) {
        return await this.drugModel.create(data);
    }

    async getDrugByName(name) {
        return await this.drugModel.findOne({ name });
    }

    async getDrugById(id) {
        return await this.drugModel.findOne({ "_id": id })
    }

    async getAllDrugs() {
        return await this.drugModel.find();
    }

    async updateDrug(id, data) {
        return await this.drugModel.updateOne({ '_id': id }, { $set: data });
    }

    async deleteById(id) {
        return await this.drugModel.deleteOne({ "_id": id })
    }
}

module.exports = DrugRepository;