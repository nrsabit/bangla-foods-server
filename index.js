const express = require('express');
const app = express();
const port = 5000;
const chefs = require('./chef-data/chef-data.json');


app.get('/', (req, res) => {
    res.send('Bangla Foods is Running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})


app.listen(port, () => {
    console.log(`Here is the Bangla Foods Server ${port}`)
})