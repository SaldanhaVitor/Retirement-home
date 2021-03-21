const joi = require('@hapi/joi')
    .extend(require('@hapi/joi-date'));

module.exports = () => ({
    create: joi.object().keys({
        nome: joi.string().lowercase().required(),
        preco_base: joi.number().required(),
        preco_varejo: joi.number().required(),
        estoque: joi.number().integer().required()
    }),
    params: joi.object().keys({
        nome: joi.string().required()
    }),
    updateBody: joi.object().keys({
        nome: joi.string().required(),
        quantidade: joi.number().required()
    })
});