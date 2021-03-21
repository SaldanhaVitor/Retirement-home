module.exports = ({ priestRepository }) => ({
    create: async (data) => {
        return await priestRepository.createPriest(data);
    },

    getAllPriests: async () => {
        return await priestRepository.getAll();
    },

    // getPersonById: async (id) => {
    //     return await personRepository.getPersonById(id);
    // },

    // getPersonByCoren: async (coren) => {
    //     return await personRepository.getPersonByCoren(coren);
    // },

    getPriestByName: async (name) => {
        return await priestRepository.getPriestByName(name);
    },

    // updatePersonByName: async (name, body) => {
    //     return await personRepository.updatePersonByName(name, body);
    // }
});