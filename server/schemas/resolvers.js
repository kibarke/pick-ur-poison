const { Query } = require('mongoose');
const { User, Cocktail, Mocktail, Cart } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const stripe = require('stripe')('');


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
        checkout: async (parent, args, context) => {
          const url = new URL(context.headers.referer).origin;
          // eslint-disable-next-line camelcase
          const line_items = {
            price_data: {
              currency: 'usd',
              unit_amount: args.total,
            },
          };
    
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items,
            mode: 'payment',
            success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${url}/`,
          });
    
          return { session: session.id };
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
