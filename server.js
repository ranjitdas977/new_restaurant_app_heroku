//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/new_restaurant_app_heroku'));


app.get('*', (req, res) => {
    res.sendFile(`./front-end/dist/index.html`); // load the single view file (angular will handle the page changes on the front-end)
});
///
app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/new_restaurant_app_heroku/'}),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);