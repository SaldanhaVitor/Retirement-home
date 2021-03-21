module.exports = ({ personService, exception }) => ({
    execute: async body => {
        const { name, coren } = body;
        const existPerson = await personService.getPersonByName(name);
        const existCoren = await personService.getPersonByCoren(coren);

        if (existPerson)
            throw exception.duplicateKeyError('duplicateKeyError', 'person_already_exist', [`${name} already exists`]);

        if (existCoren)
            throw exception.duplicateKeyError('duplicateKeyError', 'coren_already_registred', [`Already exists a person registred with coren ${coren}`]);

        return await personService.createPerson(body);
    }
});