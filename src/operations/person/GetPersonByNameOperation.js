module.exports = ({ personService, exception }) => ({
    execute: async params => {
        const { name } = params;
        const person = await personService.getPersonByName(name);

        if (!person)
            throw exception.notFound('notFound', 'person_not_found', [`${name} not found`]);

        return person;
    }
});