const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const chefs = require('./chef-data/chef-data.json');
const recipes = require('./chef-data/recipes.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Bangla Foods is Running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chefs.find(chef => chef.id === id);
    res.send(selectedChef)
})

app.get('/recipe/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedRecipe = recipes.find(recipe => recipe.id === id);
    res.send(selectedRecipe)
})

app.listen(port, () => {
    console.log(`Here is the Bangla Foods Server ${port}`)
})