const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


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

// mongoose and mango sandbox route
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog 2',
//         snippet: 'about my new blog',
//         body: 'this is more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// routes
app.get('/', (req, res) => {
    // blogs
   res.redirect('/blogs')
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

// all blogs
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', {title: 'all-blogs', blogs: result})
        })
        .catch((err) => {
            console.log(err);
        })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create'});
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});