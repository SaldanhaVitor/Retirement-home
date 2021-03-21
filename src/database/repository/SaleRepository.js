class SaleRepository {
    constructor({ saleModel }) {
        this.saleModel = saleModel;
    }

    async registerSale(data) {
        return await this.saleModel.create(data);
    }
    async getSales() {
        return await this.saleModel.find();
    }

    async getDaySales(args) {
        return await this.saleModel.find(args);
    }

    async getDaySale(args) {
        return await this.saleModel.findOne(args);
    }

}

module.exports = SaleRepository;
