module.exports = ({ personService }) => ({
    execute: async () => {
        return await personService.getPeople();
    }
});