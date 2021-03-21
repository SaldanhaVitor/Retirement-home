module.exports = ({ drugService, exception }) => ({
    execute: async params => {
        const { name: drugName } = params;
        const drug = await drugService.getDrugByName(drugName);

        if (!drug)
            throw exception.notFound('notFound', 'drug_not_found', [`Drug ${drugName} not found`]);

        return drug;
    }
});