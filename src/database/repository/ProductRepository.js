class ProductRepository {
    constructor({ productModel }) {
        this.productModel = productModel;
    }

    async createProduct(data) {
        return await this.productModel.create(data);
    }

    async getProductByName(body) {
        return await this.productModel.findOne(body)
    }
    async getAll() {
        return await this.productModel.find()
    }

    async update(body) {
        return await this.productModel.update({ nome: body.nome_produto }, { $set: { estoque_atual: body.estoque_atual } })
    }

    async updateStock(body) {
        return await this.productModel.update({ nome: body.nome_produto }, { $set: { estoque: body.estoque, estoque_atual: body.estoque_atual } })
    }

    async delete(body) {
        return await this.productModel.deleteOne({ nome: body.nome })
    }

    async getAllProducts() {
        return await this.productModel.find()
    }
}

module.exports = ProductRepository;
