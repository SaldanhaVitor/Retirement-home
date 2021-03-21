module.exports = ({ drugService, exception }) => ({
    execute: async (params, data) => {
        const { id } = params;
        const drug = await drugService.getDrugById(id);

        if (!drug)
            throw exception.notFound('notFound', 'drug_not_found', [`drug with id ${id} not found`]);

        const updateDrug = await drugService.updateDrug(id, data);

        if (updateDrug)
            return await drugService.getDrugById(id);
    }
});