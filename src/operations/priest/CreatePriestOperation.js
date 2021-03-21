module.exports = ({ priestService, exception }) => ({
    execute: async body => {
        const { name } = body;
        const existPriest = await priestService.getPriestByName(name);

        if (existPriest)
            throw exception.duplicateKeyError('duplicateKeyError', 'priest_already_exist', [`Priest ${name} already exists`]);

       return await priestService.create(body);
    }
});