var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var User = require("./models/userModel");
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
secret: "node js mongodb",
resave: false,
saveUninitialized: false
}));

//=====================
// ROUTES
//=====================
// Showing home page
app.get("/", function (req, res) {
res.render('index');
});

// Showing register form
app.get("/register", function (req, res) {
res.render('register', {
title: 'Registration Page',
name: '',
email: '',
password: ''    
})
});


//Showing login form
app.get("/login", function (req, res) {
    res.render('login', {
    title: 'Login',
    email: '',
    password: ''     
    })
    });




// Handling user signup
app.post("/register", function (req, res) {

});


//Handling user login
app.post("/login", function(req,res){

});
//Handling user logout
app.get("/logout", function (req, res) {
req.logout();
res.redirect("/");
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
console.log("Server Has Started!");
});