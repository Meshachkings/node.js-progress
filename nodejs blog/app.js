const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// view engine
app.set('view engine', 'ejs'); 

// listen for request
app.listen(3000);

app.use(express.static('public'));

//-------------------- mmiddleware [note: next()] ------------------------
// app.use((req, res, next) => {
//     console.log('new request made: ');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });
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