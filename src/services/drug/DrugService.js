module.exports = ({ drugRepository }) => ({
    createDrug: async (data) => {
        return await drugRepository.createDrug(data);
    },

    getAllDrugs: async () => {
        return await drugRepository.getAllDrugs();
    },

    getDrugById: async (id) => {
        return await drugRepository.getDrugById(id);
    },

    getDrugByName: async (name) => {
        return await drugRepository.getDrugByName(name);
    },

    updateDrug: async (id, body) => {
        return await drugRepository.updateDrug(id, body);
    },

    deleteDrugById: async (id) => {
        return await drugRepository.deleteById(id);
    },
});