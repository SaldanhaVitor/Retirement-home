module.exports = () => ({
    code: {
        NO_PRODUCT: 'no_product',
        PRODUCT_NOT_FOUND: 'product_not_found',
        PRODUCT_QTD: 'product_qtd',
        SALE_NOT_FOUND: 'sale_not_found',
        SALE_DATE_NOT_FOUND: 'SALE_DATE_NOT_FOUND'
    },
    message: {
        PRODUCT_NOT_FOUND: [`Produto {0} não cadastrado`],
        PRODUCT_QTD: [`Quantidade vendida de {0} {0} é maior que a quantidade fabricada`],
        SALE_NOT_FOUND: [`Nenhuma venda encontrada`],
        SALE_DATE_NOT_FOUND: [`Nenhuma venda registrada para a data: {0}`],
        NO_PRODUCT: [`{0}`]
    }
});
