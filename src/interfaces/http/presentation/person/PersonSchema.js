const joi = require('@hapi/joi')
    .extend(require('@hapi/joi-date'));

const EnumState = require('src/enum/EnumState');

module.exports = () => ({
    create: joi.object().keys({
        name: joi.string().required(),
        profession: joi.string().required(),
        cpf: joi.string().required(),
        birth_date: joi.date().format('DD/MM/YYYY').options({ convert: true }).raw().required(),
        phone: joi.string().required(),
        email: joi.string().email().required(),
        city: joi.string().required(),
        state: joi.string().valid(...EnumState.values()).required(),
        address: joi.string().required(),
        cep: joi.string().required(),
        coren: joi.string().required()
    }),
    getByName: joi.object().keys({
        name: joi.string().required()
    }),
    update: joi.object().keys({
        name: joi.string(),
        profession: joi.string(),
        cpf: joi.string(),
        birth_date: joi.date().format('DD/MM/YYYY').options({ convert: true }).raw(),
        phone: joi.string(),
        email: joi.string().email(),
        city: joi.string(),
        state: joi.string().valid(...EnumState.values()),
        address: joi.string(),
        cep: joi.string(),
        coren: joi.string()
    })
});