//------------INITIALIZATION-----------//

const express = require('express');
const morgan = require('morgan');
const mongoose= require('mongoose');
const Blog = require('./models/blog');
const { result } = require('lodash');
const { render } = require('ejs');

//express app
const app = express();

//connect to MongoDB

const dbURI = 'mongodb+srv://user:test1234@nodetuts.fwm8l8c.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI)
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
app.use(express.urlencoded({extended: true})); // for posting form data
app.use(morgan('dev'));

app.use((req,res,next) => {
    console.log('===New request made:===');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});

app.use((req,res,next) => {
    console.log('===Middleware done===');
    next();
});


//----------------------------------PAGES----------------------------------------//


app.get('/', (req,res) =>{
    
    //res.send('<p>Home Page!!!!</p>');
    //res.sendFile('./views/index.html', { root:__dirname });

    res.redirect('blogs');
});
app.get('/about', (req,res) =>{
    //res.send('<p>About Page</p>');
    //res.sendFile('./views/about.html', { root:__dirname });
    res.render('about', {title: 'About'});
});

//redirect
app.get('/about-us',(req,res) => {
    res.render('about', {title: 'About-Us'});
});


    //blog routes

app.get('/blogs', (req,res) =>{
    
    //res.send('<p>About Page</p>');
    //res.sendFile('./views/about.html', { root:__dirname });

    Blog.find().sort({createdAt: -1})
    .then((result) =>{
        res.render('index', {title: 'All Blogs', blogs: result} );
    })
    .catch((err) => {
        console.log(err);
    })

    
});


app.get('/blogs/create', (req,res) =>{
    //res.send('<p>About Page</p>');
    //res.sendFile('./views/about.html', { root:__dirname });
    res.render('create', {title: 'Create a post'});
});

//get pentru pagini individuale dupa ID
app.get('/blogs/:id', (req, res) => {
    const id=req.params.id;
    //console.log(id);
    Blog.findById(id)
    .then(result => {
        res.render('details', {title: 'Blog Details', blog: result});
    })
})

app.post('/blogs', (req,res) => {

    console.log("===POST request made:===");
    
    console.log(req.body);
    
    const blog = new Blog(req.body);

    blog.save()
    .then((result) => {
        res.redirect('/blogs');
    })
    .catch((err) => {
        console.log(err);
    })
})



//blog delete request
app.get('/blogs/:id' , (req,res) => {
    
    const id= req.params.id; // ia id-ul blogului de sters

    Blog.findByIdAndDelete(id) // cauta blogul in DB
    .then(result => {
        res.json({ redirect: '/blogs' }) //after deletion go to all blogs page
    })
    .catch((err) => {
        console.log(err);
    })
})




//--------------------------------404-page----------------------------------//

app.use((req,res) => {
    res.status(404).render('404',{title: 'Error Page'});
});