class GetBalancoOperation {
    constructor({
        saleService,
        exception,
        getVendasOperation
    }) {
        this.saleService = saleService
        this.exception = exception
        this.getVendasOperation = getVendasOperation
    }

    async execute() {

        const sales = await this.saleService.getSales()

        if (!sales)
            throw this.exception.notFound('notFound', ['SALE_NOT_FOUND'])

        const agregados = await this.saleService.calculate(sales)

        return agregados

    }
}

module.exports = GetBalancoOperation;

