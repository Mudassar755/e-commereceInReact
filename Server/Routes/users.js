let express = require('express');
let User = require('../db/models/user');

let router = express.Router();

router.post('/sign-up', function ( req, res ){

    User.findOne( {username: req.body.username }, function ( err, user ){
        if(user){
             res.json({ success: false, message: 'user allready exist'})
        }
        else{
            let newUser = new User(req.body);
            newUser.save();
            res.json(newUser)
        }
    });
    
});

module.exports = router;