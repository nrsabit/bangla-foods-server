const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const chefs = require('./chef-data/chef-data.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Bangla Foods is Runninggg')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id)
    const selectedChef = chefs.find(chef => chef.id === id);
    console.log(selectedChef)
    res.send(selectedChef)
})


app.listen(port, () => {
    console.log(`Here is the Bangla Foods Server ${port}`)
})