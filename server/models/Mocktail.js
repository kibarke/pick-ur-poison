const { Schema, model } = require('mongoose');

const mocktailSchema = new Schema({
    mocktailName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    mocktailIngredients: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    mocktailPrice: {
        type: Number,
        required: true,
    },
});

const Mocktail = model('Mocktail', mocktailSchema);

module.exports = Mocktail;