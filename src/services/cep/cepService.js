module.exports = ({ cepClient }) => ({
    get: async cep => {
        return await cepClient.get(cep);
    }
});