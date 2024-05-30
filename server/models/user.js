// Stole this code from stackOverflow

// grab the things we need
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  // create a schema
  var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  });

  // the schema is useless so far
  // we need to create a model using it
  var User = mongoose.model('User', userSchema);

  // make this available to our users in our Node applications
  module.exports = User;

//   controller =>
    // router.post('/signup',function(req,res){
    //     console.log("Inside")
    //     var useR= new User({
    //      name: 'Chris',
    //      username: 'sevilayha',
    //      password: 'password' 
    //     });
    //     useR.save(function(err) {
    //      if (err) throw err;
    //      console.log('User saved successfully!');
    //     });
    //    });