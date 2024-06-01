const { Schema, model } = require('mongoose');

const cocktailSchema = new Schema({
    cocktailName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    cocktailIngredients: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    cocktailPrice: {
        type: Number,
        required: true,
        min: 0.99
    },
});

const Cocktail = model('Cocktail', cocktailSchema);

module.exports = Cocktail;