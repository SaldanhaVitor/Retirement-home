const joi = require('@hapi/joi')
    .extend(require('@hapi/joi-date'));

module.exports = () => ({
    create: joi.object().keys({
        name: joi.string().required(),
        mg: joi.number().required(),
        price: joi.number().required(),
        pill_number: joi.number().required(),
        manufacturer: joi.string().required(),
        generic: joi.boolean().required(),
        expiration_date: joi.date().format('DD/MM/YYYY').options({ convert: true }).raw().required()
    }),
    getByName: joi.object().keys({
        name: joi.string().required()
    }),
    getById: joi.object().keys({
        id: joi.string().required()
    }),
    update: joi.object().keys({
        name: joi.string(),
        mg: joi.number(),
        price: joi.number(),
        pill_number: joi.number(),
        manufacturer: joi.string(),
        generic: joi.boolean(),
        expiration_date: joi.date().format('DD/MM/YYYY').options({ convert: true }).raw()
    }),
    delete: joi.object().keys({
        id: joi.string().required()
    })
});