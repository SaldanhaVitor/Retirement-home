const { object } = require("chai-spies");

class ProductService {
    constructor({ productRepository, exception }) {
        this.productRepository = productRepository
        this.exception = exception
    }

    async createProduct(body) {
        body.estoque_atual = body.estoque
        return await this.productRepository.createProduct(body);
    }

    async getProductByName(body) {
        return await this.productRepository.getProductByName(body)
    }
    async getAll() {
        return await this.productRepository.getAll()
    }

    async updateProduct(existProduct, saleQuantity) {

        let currentStock = existProduct.estoque_atual

        if (!(saleQuantity <= currentStock))
            throw this.exception.badRequest('badRequest', [`Quantidade vendida de ${existProduct.nome}: ${saleQuantity} ultrapassa a quantidade do estoque atual: ${currentStock}`])

        currentStock -= saleQuantity

        return await this.productRepository.update({ nome_produto: existProduct.nome, estoque_atual: currentStock })
    }

    async updateStock(existProduct, quantidade) {

        let currentStock = existProduct.estoque_atual + quantidade
        let stock = existProduct.estoque + quantidade

        return await this.productRepository.updateStock({ nome_produto: existProduct.nome, estoque: stock, estoque_atual: currentStock })

    }

    async deleteProduct(params) {
        return this.productRepository.delete(params)
    }

    async calculeGastos() {
        let allProducts = await this.productRepository.getAllProducts()

        let total_gasto = 0

        Object.keys(allProducts).forEach(function (value) {
            total_gasto += allProducts[value].preco_base * allProducts[value].estoque
        })

        return total_gasto

    }

    async calculeLucro() {
        let allProducts = await this.productRepository.getAllProducts()

        let total_arrecadado = 0

        Object.keys(allProducts).forEach(function (value) {
            total_arrecadado += allProducts[value].preco_varejo * allProducts[value].estoque
        })

        return total_arrecadado

    }

}
module.exports = ProductService;
