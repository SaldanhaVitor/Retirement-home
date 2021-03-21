const joi = require('@hapi/joi')
    .extend(require('@hapi/joi-date'));

module.exports = () => ({
    create: joi.object().keys({
        data: joi.date().format('YYYY-MM-DD').options({ convert: true }).raw().required(),
        produtos: joi.array().items(joi.object({
            nome: joi.string().required(),
            quantidade: joi.number().integer().required(),
            preco_base: joi.number().required(),
            preco_varejo: joi.number().required()
        })).required()
    }),
    getDay: joi.object().keys({
        data: joi.date().format('YYYY-MM-DD').options({ convert: true }).raw()
    })
})