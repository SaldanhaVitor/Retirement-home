class UpdateProductOperation {
    constructor({
        productService,
        exception
    }) {
        this.productService = productService
        this.exception = exception
    }

    async execute(body) {

        const existProduct = await this.productService.getProductByName({ nome: body.nome })

        if (!existProduct)
            throw this.exception.notFound('notFound', ['PRODUCT_NOT_FOUND'], [`${body.nome}`])


        const status = await this.productService.updateStock(existProduct, body.quantidade)

        if (status)
            return this.productService.getProductByName({ nome: body.nome })

    }
}

module.exports = UpdateProductOperation;

