'use strict';
const { Schema } = require('mongoose');
const paginate = require('mongoose-paginate-v2');

module.exports = ({ providerConnection }) => {
    const connection = providerConnection.connection;

    const saleSchema = new Schema({
        data: {
            type: String,
            required: true
        },
        produtos: {
            type: Object,
            ref: 'product',
            required: true
        },
    }, { versionKey: false });

    saleSchema.plugin(paginate);

    return connection.model('sale', saleSchema);
};
