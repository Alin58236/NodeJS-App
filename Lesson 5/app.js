//----------------------------INITIALIZATION-------------------------------------//

const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

        //app.set('views', 'myviews') - to set a custom views folder ( the standard folder is 'views', which we already made)

//listen for reqests
app.listen(3000);


//----------------------------------PAGES----------------------------------------//


app.get('/', (req,res) =>{
    
    //res.send('<p>Home Page!!!!</p>');
    //res.sendFile('./views/index.html', { root:__dirname });

    const blogs = [
        {title: 'Yoshi finds eggs', snippet:'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.'},
        {title: 'Mario finds stars', snippet:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'},
        {title: 'How to defeat browser', snippet:'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born.'},
    ]


    res.render('index', {title: 'Homepage', blogs}); //to render a view (we are not sending html anymore, instead we render views)

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
});app




//--------------------------------404-page----------------------------------//

app.use((req,res) => {
    res.status(404).render('404',{title: 'Error Page'});
});