const { Schema, model } = require('mongoose');

const birthDateSchema = new Schema({
    birthday: {
        day: {
          type: Number,
          required: true
        },
        month: {
          type: Number,
          required: true
        },
        year: {
          type: Number,
          required: true
        }
    }
});

const birthDay = model('Birthday', birthDateSchema);

module.exports = birthDay;