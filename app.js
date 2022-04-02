const express = require('express');
const app = express();

const connection = require('./db/connection');

connection.once('open', () => {
    const server = app.listen(process.env.PORT || 8080, () => {
        console.log("Connected and listening");
    });
});

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const router = require('./routes/index');
app.use('/api/v1',router);

