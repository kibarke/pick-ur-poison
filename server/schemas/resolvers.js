const { Query } = require('mongoose');
const { Cocktail, Mocktail } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        
    }
}

module.exports = resolvers;

