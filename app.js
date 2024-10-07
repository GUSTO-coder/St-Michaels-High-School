require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db')


const app = express();
const PORT = process.env.PORT || 9888;


//ConnectDB
connectDB();

app.use(express.static('public'));

//Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
 

app.get('', (req, res) => {
    const locals = {
        title: "Node Blog",
        description:"Simple Web app created by Gusto"
    }
    res.render('index' , {locals});
});

app.get('/about', (req, res) => {
    res.render('about');
});
app.listen(PORT, ()=> {
    console.log(`App listenig on port ${PORT}`);
});