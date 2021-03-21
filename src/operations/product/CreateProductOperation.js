class CreateProductOperation {
    constructor({
        productService,
        exception
    }) {
        this.productService = productService
        this.exception = exception
    }

    async execute(body) {
        const result = await this.productService.getProductByName(body)

        if (result)
            throw this.exception.duplicateKeyError('duplicateKeyError', [`Produto ${body.nome} já está cadastrado`])

        return await this.productService.createProduct(body)
    }
}

module.exports = CreateProductOperation;