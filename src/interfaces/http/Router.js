const { Router } = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const methodOverride = require('method-override');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

module.exports = ({
    container,
    loggerMiddleware,
    swaggerOptions,
    httpErrorMiddleware,
    exception
}) => {
    const apiRouter = Router();

    apiRouter
        .use(loggerMiddleware)
        .use(methodOverride('X-HTTP-Method-Override'))
        .use(cors())
        .use(bodyParser.json())
        .use(compression())
        .use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerOptions)))
        .use('/api/ceps', container.cradle.routerRegister.register(container.cradle.cepRouter))
        .use('/api/person', container.cradle.routerRegister.register(container.cradle.personRouter))
        .use('/api/drug', container.cradle.routerRegister.register(container.cradle.drugRouter))
        .use('/api/priest', container.cradle.routerRegister.register(container.cradle.priestRouter))
        .use('/api/produtos', container.cradle.routerRegister.register(container.cradle.saleRouter))
        .use((req, res, next) => { next(exception.notFound()); })
        .use(httpErrorMiddleware);

    return apiRouter;
};
