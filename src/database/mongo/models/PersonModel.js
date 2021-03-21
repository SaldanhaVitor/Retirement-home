'use strict';
const { Schema } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

module.exports = ({ providerConnection }) => {
    const connection = providerConnection.connection;

    const personSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        profession: {
            type: String,
            required: true
        },
        birth_date: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        cep: {
            type: String,
            required: true
        },
        coren: {
            type: String,
            unique: true,
            required: true
        }
    }, { versionKey: false });

    personSchema.plugin(paginate);

    return connection.model('person', personSchema);
};
