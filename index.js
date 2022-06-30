const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const methodOverride = require('method-override');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost:27017/userDB')
    .then(() => console.log('DB Connected'))
    .catch((err) => console.log(err));


// Routes 
const userRoute = require('./routes/userRoute');


app.get('/', (req, res) => {
    res.send('Connected');
})

app.use(userRoute);

//Run once when firing the server up for the first time and after that comment it so as not to reseed the same data
seedDB();


app.listen(3000, () => {
    console.log('Server started at port 3000');
})