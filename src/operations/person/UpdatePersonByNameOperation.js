module.exports = ({ personService, exception }) => ({
    execute: async (params, data) => {
        const { name } = params;
        const person = await personService.getPersonByName(name);

        if (!person)
            throw exception.notFound('notFound', 'person_not_found', [`${name} not found`]);

        const updatePerson = await personService.updatePersonByName(name, data);

        if (updatePerson)
            return await personService.getPersonById(person.id);
    }
});