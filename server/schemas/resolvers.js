const { Query } = require('mongoose');
const { Cocktail, Mocktail, Cart } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        
    },

    Mutation: {
        
    }
}

module.exports = resolvers;

