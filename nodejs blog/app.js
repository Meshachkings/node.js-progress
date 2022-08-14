const express = require ('express');

// express app
const app = express();

// view engine
app.set('view engine', 'ejs'); 

// listen for request
app.listen(3000);

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