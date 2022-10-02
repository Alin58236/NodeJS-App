//------------INITIALIZATION-----------//

const express = require('express');
const morgan = require('morgan');
const mongoose= require('mongoose');


//express app
const app = express();

//connect to MongoDB

const dbURI = 'mongodb+srv://user:test1234@nodetuts.fwm8l8c.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
        //listen for reqests only after the connection to the database is established
        app.listen(3000);
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    })


//register view engine
app.set('view engine', 'ejs');

        //app.set('views', 'myviews') - to set a custom views folder ( the standard folder is 'views', which we already made)



//middleware and static files

app.use(express.static('public'));
app.use(morgan('dev'));

app.use((req,res,next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});

app.use((req,res,next) => {
    console.log('In the next middleware');
    next();
});


//----------------------------------PAGES----------------------------------------//


app.get('/', (req,res) =>{
    
    //res.send('<p>Home Page!!!!</p>');
    //res.sendFile('./views/index.html', { root:__dirname });

    const blogs = [
        {title: 'Yoshi finds eggs', snippet:'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.'},
        {title: 'Mario finds stars', snippet:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'},
        {title: 'How to defeat browser', snippet:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.'},
    ]


    res.render('index', {title: 'All Blogs', blogs}); //to render a view (we are not sending html anymore, instead we render views)

});

app.get('/blogs', (req,res) =>{
    //res.send('<p>About Page</p>');
    //res.sendFile('./views/about.html', { root:__dirname });
    res.render('index', {title: 'All Blogs'});
});



app.get('/about', (req,res) =>{
    //res.send('<p>About Page</p>');
    //res.sendFile('./views/about.html', { root:__dirname });
    res.render('about', {title: 'About'});
});

//redirect
app.get('/about-us',(req,res) => {
    res.render('about', {title: 'AbOuT'});
});






app.get('/blogs/create', (req,res) =>{
    //res.send('<p>About Page</p>');
    //res.sendFile('./views/about.html', { root:__dirname });
    res.render('create', {title: 'Create a post'});
});

app.get('/create', (req,res) =>{
    //res.send('<p>About Page</p>');
    //res.sendFile('./views/about.html', { root:__dirname });
    res.render('create', {title: 'Create a post'});
});

//--------------------------------404-page----------------------------------//

app.use((req,res) => {
    res.status(404).render('404',{title: 'Error Page'});
});