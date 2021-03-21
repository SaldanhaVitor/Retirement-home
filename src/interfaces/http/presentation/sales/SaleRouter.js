module.exports = ({ container }) => {
    const ctx = container.cradle;

    return [
        /**
         * @swagger
         *  users/:
         *   post:
         *      tags:
         *          - User
         *      summary: This should create users.
         *      consumes:
         *        - application/json
         *      responses:
         *        200:
         *          description: User return with success.
         *        400:
         *          description: Bad Request.
         */
        {
            method: 'post',
            path: '/vendas',
            validation: {
                body: ctx.saleSchema.create,
            },
            handler: ctx.saleController.createSale
        },
        {
            method: 'get',
            path: '/vendas',
            validation: {
                query: ctx.saleSchema.getDay,
            },
            handler: ctx.saleController.getVendas
        },
        {
            method: 'get',
            path: '/balanco',
            validation: {
            },
            handler: ctx.saleController.getBalanco
        },
        {
            method: 'get',
            path: '/info',
            validation: {
            },
            handler: ctx.saleController.getInfo
        }
    ];
};
