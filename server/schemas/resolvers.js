const { Query } = require('mongoose');
const { User, Cocktail, Mocktail, Cart } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('cart');
          },
        //   user: async (parent, { username }) => {
        //     return User.findOne({ username }).populate('cart');
        //   },
        //   me: async (parent, args, context) => {
        //     if (context.user) {
        //       return User.findOne({ _id: context.user._id }).populate('cart');
        //     }
        //     throw AuthenticationError;
        //   },
        // cart: async (parent, args, context) => {
        //     return Cart.findOne({_id: context.user._id}).populate('mocktails', 'cocktails')
        // }
    },

    Mutation: {
        addUser: async (parent, { username, email, password, dateofbirth }) => {
            const user = await User.create({ username, email, password, dateofbirth });
            const token = signToken(user);
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
        // addCart: async (parent, {Mocktail, Cocktail}) => {
        //     const cart = await Cart.create({Mocktail, Cocktail});
        //     return { cart };
        // }  
    }
}

module.exports = resolvers;
