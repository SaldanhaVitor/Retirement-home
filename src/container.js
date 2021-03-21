const {
    createContainer,
    asClass,
    asFunction,
    asValue,
    InjectionMode,
    Lifetime
} = require('awilix');

//Middlewares
const Server = require('config/Server');
const Router = require('./interfaces/http/Router');
const swaggerOptions = require('src/interfaces/http/swagger/SwaggerOptions');

const logger = require('./middlewares/logging/logger');
const HttpErrors = require('./interfaces/http/errors/HttpErrors');

//Integration
const CepClient = require('src/clients/CepClient');

const container = createContainer();

const configureContainer = config => {
    container
        .register({
            server: asClass(Server).singleton(),
            router: asFunction(Router),
            logger: asFunction(logger).singleton(),
            container: asValue(container),
            config: asValue(config),
            exception: asValue(HttpErrors),
            swaggerOptions: asFunction(swaggerOptions),
        })
        .loadModules(
            [
                'src/database/mongo/provider/**/*.js',
                [
                    'src/database/mongo/provider/ProviderConnection.js',
                    {
                        lifetime: Lifetime.SINGLETON
                    }
                ],
                [
                    'src/database/mongo/models/**/*.js',
                    {
                        lifetime: Lifetime.SINGLETON
                    }
                ],
                'src/database/repository/**/*.js',
                'src/operations/**/*.js',
                'src/services/**/*.js',
                'src/middlewares/**/*.js',
                'src/interfaces/http/constants/**/*.js',
                'src/interfaces/http/presentation/**/*.js'
            ],
            {
                formatName: 'camelCase',
                resolverOptions: {
                    injectionMode: InjectionMode.PROXY
                }
            }
        );
    //Integration
    container.register({
        cepClient: asClass(CepClient)
    });
    return container;
};

module.exports = { configureContainer, container };
