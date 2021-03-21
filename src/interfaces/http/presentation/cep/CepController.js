const AsyncMiddleware = require('src/middlewares/AsyncMiddleware');

module.exports = opts => ({
    getCep: AsyncMiddleware(async ctx => {
        const response = await opts.getCepOperation.execute(ctx.params.cep);
        return ctx.res.status(opts.httpConstants.code.OK).json(response);
    })
});
