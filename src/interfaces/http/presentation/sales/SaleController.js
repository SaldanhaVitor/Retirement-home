const AsyncMiddleware = require('src/middlewares/AsyncMiddleware');

module.exports = opts => ({
    createSale: AsyncMiddleware(async ctx => {
        const response = await opts.createSaleOperation.execute(ctx.body);
        return ctx.res.status(opts.httpConstants.code.CREATED).json(response);
    }),
    getVendas: AsyncMiddleware(async ctx => {
        const response = await opts.getVendasOperation.execute(ctx);
        return ctx.res.status(opts.httpConstants.code.OK).json(response);
    }),
    getBalanco: AsyncMiddleware(async ctx => {
        const response = await opts.getBalancoOperation.execute();
        return ctx.res.status(opts.httpConstants.code.OK).json(response);
    }),
    getInfo: AsyncMiddleware(async ctx => {
        const response = await opts.getInfoOpration.execute();
        return ctx.res.status(opts.httpConstants.code.OK).json(response);
    })
});
