class GetInfoOperation {
    constructor({
        saleService,
        exception,
        productService
    }) {
        this.saleService = saleService
        this.exception = exception
        this.productService = productService
    }

    async execute() {

        const sales = await this.saleService.getSales()

        if (!sales)
            throw this.exception.notFound('notFound', ['SALE_NOT_FOUND'])

        const agregados = await this.saleService.calculate(sales)

        return await this.saleService.getInfo(agregados)

    }
}

module.exports = GetInfoOperation;

