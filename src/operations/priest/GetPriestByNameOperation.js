module.exports = ({ priestService, exception }) => ({
    execute: async params => {
        const { name } = params;
        const existPriest = await priestService.getPriestByName(name);

        if (!existPriest)
            throw exception.notFound('notFound', 'priest_not_found', [`${name} not found`]);

        return existPriest;
    }
});