const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
    mocktail: [{ type: Schema.Types.ObjectId, ref: 'Mocktail' }],
    cocktail: [{ type: Schema.Types.ObjectId, ref: 'Cocktail' }],
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;