const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://meshach:meshach123@cluster0.wnthsxd.mongodb.net/cluster0?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000)) // listen for request
    .catch((err) => console.log(err));

// view engine
app.set('view engine', 'ejs'); 

//-------------------- mmiddleware [note: next()] & static ------------------------
// app.use((req, res, next) => {
//     console.log('new request made: ');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    // blogs
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Clita elitr et amet et ipsum sea. Ipsum stet kasd ea et no est duo diam. Lorem dolores eos ut nonumy'},
        {title: 'Yoshi finds eggs', snippet: 'Clita elitr et amet et ipsum sea. Ipsum stet kasd ea et no est duo diam. Lorem dolores eos ut nonumy'},
        {title: 'Yoshi finds eggs', snippet: 'Clita elitr et amet et ipsum sea. Ipsum stet kasd ea et no est duo diam. Lorem dolores eos ut nonumy'}
        
    ];

    res.render('index', { title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

// redirects
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create'});
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});