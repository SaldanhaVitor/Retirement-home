'use strict';
const { Schema } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

module.exports = ({ providerConnection }) => {
    const connection = providerConnection.connection;

    const productSchema = new Schema({
        nome: {
            type: String,
            required: true
        },
        preco_base: {
            type: Number,
            required: true
        },
        preco_varejo: {
            type: Number,
            required: true
        },
        estoque: {
            type: Number,
            required: true
        },
        estoque_atual: {
            type: Number,
            required: true
        }
    }, { versionKey: false });

    productSchema.plugin(paginate);

    return connection.model('product', productSchema);
};
