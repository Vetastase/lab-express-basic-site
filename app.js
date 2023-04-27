// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Public available entirely
app.use(express.static('public'));

// HTML Routes
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/Home.html'));
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/About.html'));
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/Works.html'));
app.get('/gallery', (request, response, next) => response.sendFile(__dirname + '/views/PhotoGallery.html'));

// Server Started
app.listen(3000, () => console.log('My first app listening on port 3000!'));
