const joi = require('@hapi/joi')
    .extend(require('@hapi/joi-date'));

module.exports = () => ({
    create: joi.object().keys({
        name: joi.string().required(),
        age: joi.number().required(),
        birth_date: joi.date().format('DD/MM/YYYY').options({ convert: true }).raw().required(),
        diseases: joi.array().items(joi.string()),
        treatments: joi.array().items(
            joi.object().keys({
                treatment: joi.string().required(),
                description: joi.string().required(),
                start_treatment: joi.date().format('DD/MM/YYYY').options({ convert: true }).raw().required(),
                end_treatment: joi.date().format('DD/MM/YYYY').options({ convert: true }).raw().required(),
            })
        ),
        weight: joi.number().required(),
        bedridden: joi.boolean().required()
    }),
    getByName: joi.object().keys({
        name: joi.string().required()
    }),
    update: joi.object().keys({
        name: joi.string(),
        age: joi.number(),
        birth_date: joi.date().format('DD/MM/YYYY').options({ convert: true }).raw(),
        diseases: joi.array().items(joi.string()),
        treatments: joi.array().items(
            joi.object().keys({
                treatment: joi.string(),
                description: joi.string(),
                start_treatment: joi.date().format('DD/MM/YYYY').options({ convert: true }).raw(),
                end_treatment: joi.date().format('DD/MM/YYYY').options({ convert: true }).raw(),
            })
        ),
        weight: joi.number(),
        bedridden: joi.boolean()
    }),
    delete: joi.object().keys({
        id: joi.string().required()
    })
});