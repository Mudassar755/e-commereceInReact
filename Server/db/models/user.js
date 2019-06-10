let mongoose = require('mongoose');

// let socialSchema = mongoose.Schema({
//     fb: String,
//     linked: String
// });

// let Social = mongoose.model('social', socialSchema);


let addressSchema = mongoose.Schema({
    postalCode: Number,
    street: String,
    // social: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: 'social'
    // }
});

let Address = mongoose.model('address', addressSchema);

let userSchema = mongoose.Schema({
    
    firstname: String,
    lastname: String,
    username: String,
    email: String,
    // city: String,
    password: String,
    gender: String,
    age: Number,
    address: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'address'
    }
    // friends: [{ name: String }]

});

userSchema.virtual('name').get(function () {

    return this.firstname + " " + this.lastname;

}).set(function (newName) {

    let dName = newName.split(' ');

    this.firstname = dName[0];
    this.lastname = dName[1];

});




let User = mongoose.model('user', userSchema);



module.exports = { 
    User,
    // Social,
    Address
};