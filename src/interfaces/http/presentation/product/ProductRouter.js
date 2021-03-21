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
            path: '/',
            validation: {
                body: ctx.productSchema.create,
            },
            handler: ctx.productController.createProduct
        },
        {
            method: 'get',
            path: '/buscar/:nome',
            validation: {
                params: ctx.productSchema.params,
            },
            handler: ctx.productController.getProduct
        },
        {
            method: 'get',
            path: '/buscar',
            validation: {
            },
            handler: ctx.productController.getAllProduct
        },
        {
            method: 'put',
            path: '/estoque',
            validation: {
                body: ctx.productSchema.updateBody,
            },
            handler: ctx.productController.updateProduct
        },
        {
            method: 'delete',
            path: '/:nome',
            validation: {
                params: ctx.productSchema.params,
            },
            handler: ctx.productController.deleteProduct
        }
    ];
};
