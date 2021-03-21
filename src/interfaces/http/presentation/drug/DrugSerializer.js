module.exports = ({ }) => ({
    serialize: entity => ({
        name: entity.name,
        mg: entity.mg,
        price: entity.price,
        pill_number: entity.pill_number,
        manufacturer: entity.manufacturer,
        generic: entity.generic,
        expiration_date: entity.expiration_date
    })
});
