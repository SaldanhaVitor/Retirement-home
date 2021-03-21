module.exports = ({ priestService }) => ({
    execute: async () => {
        return await priestService.getAllPriests();
    }
});