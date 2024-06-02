const { Schema, model } = require('mongoose');

const mocktailSchema = new Schema({
    name: {
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
        type: Number,
        required: true,
        min: 0.99
    },
});

const Mocktail = model('Mocktail', mocktailSchema);

module.exports = Mocktail;