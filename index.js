const express = require('express');

const app = express();

app.use(express.static('public'));

const server = app.listen(5000, function() {
    console.log('Server listening at port 5000');
});