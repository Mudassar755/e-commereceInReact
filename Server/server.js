let express = require('express');

let bp = require('body-parser');
let multer = require('multer');
let passport = require('./authentication');
let cookieParser = require('cookie-parser');
let expresSession = require('express-session');

let models = require('./db/models/user');
let userRoutes = require('./routes/users');

let User = models.User;
let Address = models.Address;
// let Social = models.Social;


require('./db/config');

let fs = require('fs');

let server = express();
server.use(bp.urlencoded({}));

server.use(bp.json());

passport.serializeUser(function(user, next){ // used to put thw data in cookie and will run when 
                                            //user login will keep Id
    next(null, user.id);
});

passport.deserializeUser(function(userID, next){ // will run when user came back after redirect
    User.findById(userID, function (err, user) {
        next(err, user)
    })
})

server.use(cookieParser());
server.use(expresSession ( { secret: 'The cat is here'}));
server.use(passport.initialize());
server.use(passport.session());


// let uploader = multer({storage:storage});

// let conf = multer({dest:'./uploads'})

// let conf = multer({ storage: storage });

var loggedInUser = null;

server.get('/logout', function (req, res){
    req.logout();
    res.json({
        success: true
    });
})

server.get('/users', function (req, res) {

    let query = User.find({ email: 'addres2' });
    
    // .populate('address');
    
    query.exec(function (err, users) {

        res.json(users);

    })

});

server.use('/', userRoutes)

// server.post('/login', function (req, res, next) {

//   let auth = passport.authenticate('local', function ( err, user){

//     if(user){
//         req.login( user, function () {
            
//             res.json(user)
//         })
//     }

//     else{
//         res.json("Success False:");
//     }
//   })(req, res, next)

// });

server.put('/update', function (req, res) {

    let id = req.body.id;
    delete req.body.id;

    // User.remove({_id:})
    User.findByIdAndRemove(req.body.id, function (err, dObject) {

    })

    User.findByIdAndUpdate(id, req.body, function (err, user) {

        // res.send(400);
        res.json(user);
        // res.json("asdadasd");

    });

});




server.get('/users', function (req, res) {

    User.find({}, function (err, user) {

        res.json(user);

    });

});

server.post('/sign-up', function (req, res) {

    // User.findOne({ email: req.body.email }, function (err, user) {

    //     if (user) {
    //         res.json({ success: false, message: 'user already exists' });
    //     } else {
        server.get('/', function (req, res) {
            
        })

            let address = new Address();
            address.postalCode = 100;
            address.street = "Jungle Steet";
            address.save();

            let newUSer = new User(req.body);

            newUSer.firstname = req.body.firstname;
            newUSer.lastname = req.body.lastname;

            newUSer.address = address;

            newUSer.name = req.body.firstname + " " + req.body.lastname;

            newUSer.save();
            res.json(newUSer);
        }


    // })



);


server.get('/logout', function (req, res) {
    loggedInUser = null;
    res.redirect('/');
});

server.get('/dashboard', function (req, res) {

    if (loggedInUser) {

        res.sendfile('./static/dashboard.html');
    } else {
        res.redirect('/');
    }

})

server.get('/products/:pid/:city', function (req, res) {

    console.log(req.params.pid);
    res.end(req.body.email);

});


server.use(express.static('./static'));
server.use(express.static('./uploads'));

server.listen(7070);
