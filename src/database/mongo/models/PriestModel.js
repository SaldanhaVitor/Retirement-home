'use strict';
const { array } = require('@hapi/joi');
const { Schema } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

module.exports = ({ providerConnection }) => {
    const connection = providerConnection.connection;

    const priestSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        birth_date: {
            type: String,
            required: true
        },
        diseases: {
            type: Array,
            required: true
        },
        treatments: {
            type: Array,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        bedridden: {
            type: Boolean,
            required: true
        }
    }, { versionKey: false });

    priestSchema.plugin(paginate);

    return connection.model('priest', priestSchema);
};
