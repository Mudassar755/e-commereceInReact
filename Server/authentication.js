let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
//Strategy is a class in passport-local 

let User = require('./db/models/user').User;

passport.use(new LocalStrategy({
//    "usernameField" : "email"    
}, function(username, pass, next){
    User.findOne({
        username: username,
        password: pass,
    }, function ( err, user){

        next(err, user)

    });
    
}));




module.exports = passport;