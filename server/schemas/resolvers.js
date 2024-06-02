const { Query } = require('mongoose');
const { User, Cocktail, Mocktail, Cart } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
          return User.find().populate('cart');
          },
        user: async (parent, { username }) => {
          return User.findOne({ username }).populate('cart');
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
 
    }
}

module.exports = resolvers;
