class GetProductOperation {
    constructor({
        productService,
        exception
    }) {
        this.productService = productService
        this.exception = exception
    }

    async execute(body) {

        const result = await this.productService.getProductByName(body);

        if (!result)
            throw this.exception.notFound('notFound', ['PRODUCT_NOT_FOUND'], [`${body.nome}`])

        return result

    }

    async getAll() {

        const products = await this.productService.getAll();

        if (!products)
            throw this.exception.notFound('notFound', ['NO_PRODUCT'], [`Nenhum produto cadastrado`])

        return products

    }
}

module.exports = GetProductOperation;

