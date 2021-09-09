const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// sets up the express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//API ROUTE

app.use('/api', apiRoutes);

//HTML ROUTE
app.use('/', htmlRoutes);

// setup public folder for imgs, js, css
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`App lisenting on port: ${PORT}!`);
});