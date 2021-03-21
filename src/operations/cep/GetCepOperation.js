module.exports = ({ cepService }) => ({
    execute: async (cep) => {
        return await cepService.get(cep);
    }
});
