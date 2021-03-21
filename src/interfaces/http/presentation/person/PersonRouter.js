module.exports = ({ container }) => {
    const ctx = container.cradle;

    return [
        /**
         * @swagger
         *  person/:
         *   post:
         *      tags:
         *          - person
         *      summary: This should create person.
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
                body: ctx.personSchema.create,
            },
            handler: ctx.personController.createPerson
        },
        {
            method: 'get',
            path: '/',
            validation: {
            },
            handler: ctx.personController.getPeople
        },
        {
            method: 'get',
            path: '/:name',
            validation: {
                params: ctx.personSchema.getByName,
            },
            handler: ctx.personController.getPersonByName
        },
        {
            method: 'put',
            path: '/:name',
            validation: {
                params: ctx.personSchema.getByName,
                body: ctx.personSchema.update,
            },
            handler: ctx.personController.updatePersonByName
        },

    ];
};