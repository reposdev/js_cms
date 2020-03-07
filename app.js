const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

/*Confirgure Mongoose to connect to MongoDB*/
mongoose.connect('mongodb://localhost:27017/cms_tutorial', { useNewUrlParser: true })
    .then(response => {
        console.log('MongoDB Connected');
    }).catch(err => {
        console.log('Database Connection Failed');
    })


/*Configure express*/
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

/*Setup view engine to use handlebars*/
app.engine('handlebars', hbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');   

/*Routes*/
app.use('/', (req, res) => {
    res.send('Welcome');
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});