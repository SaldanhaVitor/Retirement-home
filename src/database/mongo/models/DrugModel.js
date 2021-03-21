'use strict';
const { Schema } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

module.exports = ({ providerConnection }) => {
    const connection = providerConnection.connection;

    const drugSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        mg: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true

        },
        pill_number: {
            type: Number,
            required: true

        },
        manufacturer: {
            type: String,
            required: true

        },
        generic: {
            type: Boolean,
            required: true
        },
        expiration_date: {
            type: String,
            required: true

        }
    }, { versionKey: false });

    drugSchema.plugin(paginate);

    return connection.model('drug', drugSchema);
};
