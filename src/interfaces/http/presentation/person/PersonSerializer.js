module.exports = ({ }) => ({
    serialize: entity => ({
        name: entity.name,
        profession: entity.profession,
        cpf: entity.cpf,
        birth_date: entity.birth_date,
        phone: entity.phone,
        email: entity.email,
        city: entity.city,
        state: entity.state,
        address: entity.address,
        cep: entity.cep,
        coren: entity.coren
    }),
    arraySerializer: entity => {
        return entity.filter(el => delete el._id);
    }
});
