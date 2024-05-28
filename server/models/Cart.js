const { Schema, model } = require('mongoose');

const cartSchema = new Schema({
    // reference the user_id:
    mocktail: [{ type: Schema.Types.ObjectId, ref: 'Mocktail' }],
    cocktail: [{ type: Schema.Types.ObjectId, ref: 'Cocktail' }],
});

const Cart = model('Cart', cartSchema);

module.exports = Cart;