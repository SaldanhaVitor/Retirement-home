class GetVendasOperation {
    constructor({
        saleService,
        exception,
        productService
    }) {
        this.saleService = saleService
        this.exception = exception
        this.productService = productService
    }

    async execute(ctx) {


        if (ctx.query.hasOwnProperty("data")) {

            const sales = await this.saleService.getDaySales(ctx.query)

            if (!sales.length)
                throw this.exception.notFound('notFound', ['SALE_DATE_NOT_FOUND'], [`${ctx.query.data}`])

            return this.saleService.calculate(sales)

        }

        const sales = await this.saleService.getSales()

        if (!sales.length)
            throw this.exception.notFound('notFound', ['SALE_NOT_FOUND'], [`0`])


        return this.saleService.calcSales(sales)
    }

}

module.exports = GetVendasOperation;

