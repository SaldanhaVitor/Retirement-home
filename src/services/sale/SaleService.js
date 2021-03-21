
class SaleService {
    constructor({ saleRepository, getProductOperation, productService, exception }) {
        this.saleRepository = saleRepository
        this.getProductOperation = getProductOperation
        this.productService = productService
        this.exception = exception
    }

    async createSale(body) {
        return await this.saleRepository.registerSale(body);
    }

    async getSales() {
        return await this.saleRepository.getSales();
    }

    async getDaySales(query) {
        const { data } = query
        return await this.saleRepository.getDaySales({ data });
    }

    async calcSales(sales) {
        const agregados = sales.reduce((acumulador, venda) => {
            venda.produtos.forEach(produto => {
                if (acumulador.hasOwnProperty(produto.nome)) {
                    acumulador[produto.nome].quantidade += produto.quantidade
                    acumulador[produto.nome].preco_varejo = produto.preco_varejo
                    acumulador[produto.nome].preco_base = produto.preco_base
                } else {
                    acumulador[produto.nome] = {
                        quantidade: produto.quantidade,
                        preco_varejo: produto.preco_varejo,
                        preco_base: produto.preco_base,
                    }
                }
            })
            return acumulador
        }, {})

        return agregados
    }

    async calculate(sales) {
        const valoresPadrao = {
            quantidade: 0,
            preco_varejo: 0,
            preco_base: 0,
            arrecadacao: 0
        }

        const agregados = sales.reduce((acumulador, venda) => {

            const produtos_agregados = venda.produtos.forEach(produto => {
                if (!acumulador.produtos.hasOwnProperty(produto.nome)) {
                    acumulador.produtos[produto.nome] = { ...valoresPadrao }
                }

                const produtoValores = acumulador.produtos[produto.nome]

                produtoValores.quantidade += produto.quantidade

                const produtoTotalVarejo = produto.preco_varejo * produto.quantidade
                const produtoTotalBase = produto.preco_base * produto.quantidade

                produtoValores.preco_varejo += produtoTotalVarejo
                produtoValores.preco_base += produtoTotalBase

                produtoValores.arrecadacao += (produtoTotalVarejo - produtoTotalBase)

                acumulador.total_arrecadado += (produtoTotalVarejo - produtoTotalBase)
            })

            return acumulador;

        }, { total_arrecadado: 0, total_vendas: sales.length, produtos: {} })

        return agregados
    }
    async getInfo(agregados) {

        let resultado = {
            total_a_arrecadar: 0,
            custo_producao: 0,
            diferença: 0,
            total_vendas: 0,
            falta_abater: 0,
            lucro_esperado: 0,
            valor_lucro_esperado: 0
        }

        resultado.total_vendas = agregados.total_arrecadado
        resultado.custo_producao = await this.productService.calculeGastos()
        resultado.falta_abater = resultado.custo_producao - resultado.total_vendas
        resultado.total_a_arrecadar  = await this.productService.calculeLucro()
        resultado.valor_lucro_esperado = (await this.productService.calculeLucro() - resultado.custo_producao) - resultado.custo_producao
        resultado.lucro_esperado = ((resultado.valor_lucro_esperado * 100) / resultado.custo_producao).toFixed(2) + "%"
        resultado.diferença = resultado.total_a_arrecadar - resultado.custo_producao


        return resultado
    }

}



module.exports = SaleService;
