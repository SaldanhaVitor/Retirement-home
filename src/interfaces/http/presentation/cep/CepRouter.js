module.exports = ({ container }) => {
    const ctx = container.cradle;

    return [
        /**
         * @swagger
         *  ceps/:cep:
         *   get:
         *      tags:
         *          - Cep
         *      summary: This should return informations by cep passed in parameter.
         *      consumes:
         *        - application/json
         *      parameters:
         *        - name: Cep
         *          id: Cep for search.
         *          in: path
         *          required: true
         *          type: string
         *      responses:
         *        200:
         *          description: Cep return with success.
         *        404:
         *          description: Cep not found.
         */
        {
            method: 'get',
            path: '/:cep',
            validation: {
                params: ctx.cepSchema.params,
            },
            handler: ctx.cepController.getCep
        },
    ];
};
