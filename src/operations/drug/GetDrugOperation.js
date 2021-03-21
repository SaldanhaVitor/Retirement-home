module.exports = ({ drugService }) => ({
    execute: async () => {
        return await drugService.getAllDrugs();
    }
});