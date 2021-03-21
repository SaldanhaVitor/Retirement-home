class CreateSaleOperation {
    constructor({
        saleService,
        exception,
        productService
    }) {
        this.saleService = saleService
        this.exception = exception
        this.productService = productService
    }

    async execute(body) {

        const items = body.produtos
        let saleQuantity = 0
        let currentStock = 0
        let name
        let existProduct

        for (const element of items) {
            name = element.nome
            saleQuantity = element.quantidade

            existProduct = await this.productService.getProductByName({ nome: name })

            if (!existProduct)
                throw this.exception.notFound('notFound', ['PRODUCT_NOT_FOUND'], [`${name}`])

            await this.productService.updateProduct(existProduct, saleQuantity)

        }
        return await this.saleService.createSale(body)
    }
}

module.exports = CreateSaleOperation;

