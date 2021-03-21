module.exports = ({ drugService, exception }) => ({
    execute: async params => {
        const { id } = params;

        const drug = await drugService.getDrugById(id);

        if (!drug)
            throw exception.notFound('notFound', 'drug_not_found', [`drug with id ${id} not found`]);

        const deleted = await drugService.deleteDrugById(id);

        if (deleted)
            return {
                deleted: 'ok',
                success: true
            }
    }
});