// Requirements
const express = require('express');
const layouts = require('express-ejs-layouts');
const path = require('path');

//  App Setup
const app = express();
app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.static(path.join(__dirname, '/static')));
app.use(express.urlencoded({ extended: false })); //Body parsing middleware

// Global routes
app.get('/', (req, res) => {
    res.render('home');
});

// /inspiration

// Controllers/routes
app.use('/dinos', require('./routes/dinos'));
app.use('/explore', require('./routes/explore'));

// Listen
app.listen(3000, () => console.log('Listening on Port 3000'));