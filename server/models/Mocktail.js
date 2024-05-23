const { Schema, model } = require('mongoose');

const mocktailSchema = new Schema({
    mocktailName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    ingredients: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    price: {

    },
});

const Mocktail = model('Mocktail', mocktailSchema);

module.exports = Mocktail;