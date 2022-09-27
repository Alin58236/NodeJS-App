const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

        //app.set('views', 'myviews') - to set a custom views folder ( the standard folder is 'views', which we already made)


//listen for reqests
app.listen(3000);

app.get('/', (req,res) =>{
    //res.send('<p>Home Page!!!!</p>');
    //res.sendFile('./views/index.html', { root:__dirname });

    res.render('index'); //to render a view (we are not sending html anymore, instead we render views)

});

app.get('/about', (req,res) =>{
    //res.send('<p>About Page</p>');
    //res.sendFile('./views/about.html', { root:__dirname });
    res.render('about');
});

//redirects

app.get('/about-us',(req,res) => {
    res.render('/about');
});

//404 page

app.use((req,res) => {
    res.status(404).render('404');
});