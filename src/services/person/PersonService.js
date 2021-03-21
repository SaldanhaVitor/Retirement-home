module.exports = ({ personRepository }) => ({
    createPerson: async (data) => {
        return await personRepository.createPerson(data);
    },

    getPeople: async () => {
        return await personRepository.getPeople();
    },

    getPersonById: async (id) => {
        return await personRepository.getPersonById(id);
    },

    getPersonByCoren: async (coren) => {
        return await personRepository.getPersonByCoren(coren);
    },

    getPersonByName: async (name) => {
        return await personRepository.getPersonByName(name);
    },

    updatePersonByName: async (name, body) => {
        return await personRepository.updatePersonByName(name, body);
    }
});