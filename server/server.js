require('dotenv').config()
require('es6-promise').polyfill()
require('isomorphic-fetch')
const RECIPE_KEY = process.env.API_CLIENT_SECRET
const baseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients="
const recipeDetailUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"
require('isomorphic-fetch')
const express = require('express');
const app = express();
app.set('port', (process.env.PORT || 3001));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

function checkStatus(response) {
    // If response not okay, throw an error
    if (!response.ok) {
        const error = new Error(response.statusText)
        error.response = response
        throw error
    }

    // Otherwise just return the response
    return response
}

function parseJSON(response) {
    return response.json()
}



app.get('/api/recipe/:ingred', (req, res, next) => {
       let string = req.params.ingred
console.log(string)


    fetch(`${baseUrl}${string}`, {
            method: 'GET',
            headers: {

                'X-RapidAPI-Key': `${RECIPE_KEY}`
            }
        })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
        let newResult = json.map(recipe=>{
          return {id: recipe.id, image: recipe.image, title: recipe.title}

        })
        console.log(newResult)
            res.json(newResult)

        })
        .catch((error) => {

            next(error)
        })
})


app.get('/api/fullrecipe/:id', (req, res, next) => {
    let recipeId = req.params.id
    console.log(recipeDetailUrl+recipeId+"/information")
    fetch(`${recipeDetailUrl}${recipeId}/information`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': `${RECIPE_KEY}`
            }
        })
        .then(checkStatus)
        .then(parseJSON)
        .then((json) => {
        let newResult = json.map(recipe=>{
          return {ingredients: recipe.extendedIngredients, instructions: instructions}

        })
        console.log(newResult)
            res.json(newResult)
        }).catch((error) => {
            next(error)
        })




})


//JSON properties to extract: extendedIngredients,instructions,image
//recipeSearch extract : let newResult = result.map(recipe=>{
//return {id: recipe.id,image: recipe.image, title: recipe.title}


//})

function errorHandler(err, req, res, next) {
    console.error('Error: ', err.stack)
    res.status(err.response ? err.response.status : 500)
    res.json({ error: err.message })
}


app.use(errorHandler)

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`)
})