module.exports = ({ }) => ({
    serialize: entity => ({
        name: entity.name,
        age: entity.age,
        birth_date: entity.birth_date,
        diseases: entity.diseases,
        treatments: entity.treatments,
        weight: entity.weight,
        bedridden: entity.bedridden
    }),
    serializeAll: entity =>
        entity.filter(el => delete el._id)
});
