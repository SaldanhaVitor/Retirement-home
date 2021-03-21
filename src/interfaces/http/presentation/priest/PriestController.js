const AsyncMiddleware = require('src/middlewares/AsyncMiddleware');

module.exports = opts => ({
    createPriest: AsyncMiddleware(async ctx => {
        const response = await opts.createPriestOperation.execute(ctx.body);
        const respMapper = await opts.priestSerializer.serialize(response);
        return ctx.res.status(opts.httpConstants.code.CREATED).json(respMapper);
    }),
    getAll: AsyncMiddleware(async ctx => {
        const response = await opts.getAllPriestOperation.execute();
        const respMapper = await opts.priestSerializer.serializeAll(response);
        return ctx.res.status(opts.httpConstants.code.OK).json(respMapper);
    }),
    getPriestByName: AsyncMiddleware(async ctx => {
        const response = await opts.getPriestByNameOperation.execute(ctx.params);
        const respMapper = await opts.priestSerializer.serialize(response);
        return ctx.res.status(opts.httpConstants.code.OK).json(respMapper);
    })
})