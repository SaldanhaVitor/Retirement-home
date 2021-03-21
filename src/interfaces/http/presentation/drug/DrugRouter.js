module.exports = ({ container }) => {
    const ctx = container.cradle;

    return [
        /**
         * @swagger
         *  drug/:
         *   post:
         *      tags:
         *          - drug
         *      summary: This should create drug.
         *      consumes:
         *        - application/json
         *      responses:
         *        200:
         *          description: Drug return with success.
         *        400:
         *          description: Bad Request.
         *   get:
         *      tags:
         *          - drug
         *      summary: This should create drug.
         *      consumes:
         *        - application/json
         *      responses:
         *        200:
         *          description: Drug return with success.
         *        400:
         *          description: Bad Request.
         */

        {
            method: 'post',
            path: '/',
            validation: {
                body: ctx.drugSchema.create,
            },
            handler: ctx.drugController.createDrug
        },
        {
            method: 'get',
            path: '/',
            validation: {
            },
            handler: ctx.drugController.getAllDrugs
        },
        {
            method: 'get',
            path: '/:name',
            validation: {
                params: ctx.drugSchema.getByName,
            },
            handler: ctx.drugController.getDrugByName
        },
        {
            method: 'put',
            path: '/:id',
            validation: {
                params: ctx.drugSchema.getById,
                body: ctx.drugSchema.update,
            },
            handler: ctx.drugController.updateDrugByName
        },
        {
            method: 'delete',
            path: '/:id',
            validation: {
            },
            handler: ctx.drugController.deleteDrugById
        },
    ];
};