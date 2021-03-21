const AsyncMiddleware = require('src/middlewares/AsyncMiddleware');

module.exports = opts => ({
    createDrug: AsyncMiddleware(async ctx => {
        const response = await opts.createDrugOperation.execute(ctx.body);
        const respMapper = await opts.drugSerializer.serialize(response);
        return ctx.res.status(opts.httpConstants.code.CREATED).json(respMapper);
    }),
    getAllDrugs: AsyncMiddleware(async ctx => {
        const response = await opts.getDrugOperation.execute();
        return ctx.res.status(opts.httpConstants.code.OK).json(response);
    }),
    getDrugByName: AsyncMiddleware(async ctx => {
        const response = await opts.getDrugByNameOperation.execute(ctx.params);
        const respMapper = await opts.drugSerializer.serialize(response);
        return ctx.res.status(opts.httpConstants.code.OK).json(respMapper);
    }),
    updateDrugByName: AsyncMiddleware(async ctx => {
        const response = await opts.updateDrugOperation.execute(ctx.params, ctx.body);
        const respMapper = await opts.drugSerializer.serialize(response);
        return ctx.res.status(opts.httpConstants.code.OK).json(respMapper);
    }),
    deleteDrugById: AsyncMiddleware(async ctx => {
        const response = await opts.deleteDrugOperation.execute(ctx.params);
        return ctx.res.status(opts.httpConstants.code.OK).json(response);
    })
});