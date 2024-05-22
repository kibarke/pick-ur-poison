const mongoose = require('mongoose');

// TODO: Note => We need to add a database to the end
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pickurpoisonDB').
    catch(error => handleError(error));

    mongoose.connection.on('error', err => {
        logError(err);
      });


module.exports = mongoose.connection;