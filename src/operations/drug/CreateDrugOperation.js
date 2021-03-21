module.exports = ({ drugService, exception }) => ({
    execute: async body => {
        const { name } = body;

        const drug = await drugService.getDrugByName(name);

        if (drug)
            throw exception.duplicateKeyError('duplicateKeyError', 'Drug_already_exist', [`${name} already exists`]);

        return await drugService.createDrug(body);
    }
});