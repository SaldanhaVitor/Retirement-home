class DeleteProductOperation {
    constructor({
        productService,
        exception
    }) {
        this.productService = productService
        this.exception = exception
    }

    async execute(params) {

        const existProduct = await this.productService.getProductByName({ nome: params.nome })

        if (!existProduct)
            throw this.exception.notFound('notFound', ['PRODUCT_NOT_FOUND'], [`${params.nome}`])

        const status = await this.productService.deleteProduct(params)

        
        if (status)
            return { message: `Produto ${params.nome} excluído com sucesso!` }
    }
}

module.exports = DeleteProductOperation;

