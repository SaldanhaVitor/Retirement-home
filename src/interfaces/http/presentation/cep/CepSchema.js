const joi = require('@hapi/joi')
    .extend(require('@hapi/joi-date'));

module.exports = () => ({
    params: joi.object().keys({
        cep: joi.string().required()
    })
});