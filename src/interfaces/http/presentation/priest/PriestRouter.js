module.exports = ({ container }) => {
    const ctx = container.cradle;

    return [
        /**
         * @swagger
         *  priest/:
         *   post:
         *      tags:
         *          - Priest
         *      summary: This should create priest.
         *      consumes:
         *        - application/json
         *      responses:
         *        200:
         *          description: Priest return with success.
         *        400:
         *          description: Bad Request.
         */
        {
            method: 'post',
            path: '/',
            validation: {
                body: ctx.priestSchema.create,
            },
            handler: ctx.priestController.createPriest
        },
        {
            method: 'get',
            path: '/',
            validation: {
            },
            handler: ctx.priestController.getAll
        },
        {
            method: 'get',
            path: '/:name',
            validation: {
                params: ctx.priestSchema.getByName
            },
            handler: ctx.priestController.getPriestByName
        },
    ];
};
