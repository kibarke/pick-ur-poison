const db = require('../config/connection');
const { Cocktail, Mocktail } = require('../models');
const cocktailSeeds = require('./cocktailSeeds.json');
const mocktailSeeds = require('./mocktailSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Cocktail', 'cocktails');
    
    await cleanDB('Mocktail', 'mocktails');

    await Cocktail.create(cocktailSeeds);

    await Mocktail.create(mocktailSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});