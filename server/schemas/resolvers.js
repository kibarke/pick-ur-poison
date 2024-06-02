const { Query } = require('mongoose');
const { User, Cocktail, Mocktail, Cart } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
          return User.find().populate('cart');
          },
        user: async (parent, {}, context) => {
          return User.findOne({ _id: context.user._id}).populate('cart');
         },
        mocktails: async () => {
          return Mocktail.find();
        },
        mocktail: async (parent, { _id }) => {
          return await Mocktail.findById(_id);
        },
        cocktails: async () => {
          return Cocktail.find();
        },
        cocktail: async (parent, { _id }) => {
          return await Cocktail.findById(_id);
        },
        cart: async (parent, { id }, context) => {
          if (context.user) {
            const user = await User.findById({_id: context.user._id}).populate('cart');
  
            return user.cart.id(id);
          }
    
          throw AuthenticationError;
        },
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
 
        createCart: async (parent, { Mocktail, Cocktail }, context) => {
          if (context.user) {
            const cart = await Cart.create({
              Mocktail,
              Cocktail
            });

          await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { cart: cart._id } }
          );

          return cart;
        }
        throw AuthenticationError;
        ('You need to be logged in!');
      },

    removeMocktail: async (parent, { cartId, mocktailId }, context) => {
      if (context.user) {
        return Cart.findOneAndUpdate(
          { _id: cartId },
          {
            $pull: {
              mocktails: {
                _id: mocktailId,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    removeCocktail: async (parent, { cartId, cocktailId }, context) => {
      if (context.user) {
        return Cart.findOneAndUpdate(
          { _id: cartId },
          {
            $pull: {
              cocktails: {
                _id: cocktailId,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  }, 
}

module.exports = resolvers;
