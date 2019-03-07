require("dotenv").config();
require("es6-promise").polyfill();
require("isomorphic-fetch");
const RECIPE_KEY = process.env.API_CLIENT_SECRET;
const baseUrl =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=";
const recipeDetailUrl =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/";
require("isomorphic-fetch");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const { urlencoded, json } = require("body-parser");
const session = require("express-session");
const models = require("./models");
const Cart = mongoose.model("Cart");
const path = require("path");

/*const savedRecipeSchema = new mongoose.Schema({
    title: { type: String },
    instructions: {type: String},
    ingredients: [{type: String}]

})


const savedIngredientSchema = new mongoose.Schema({
    ingredients: [{ type: String }]

})



const User = mongoose.model('User', userSchema)
const Recipe = mongoose.model('Recipe', savedRecipeSchema)
const Ingredient = mongoose.model('Ingredient', savedIngredientSchema)
*/
app.use(express.static(path.join(__dirname, "client", "build")));

app.use(cookieParser());
app.use(
    session({
        secret: "11df23",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 6000 }
    })
);

app.use(urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.session = req.session;

    next();
});

app.use((req, res, next) => {
    if (mongoose.connection.readyState) {
        next();
    } else {
        require("./mongo")().then(() => next());
    }
});

app.set("port", process.env.PORT || 3001);
if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get("*", (req, res) => {
        res.sendfile(path.resolve("build", "index.html"));
    });
}

function checkStatus(response) {
    // If response not okay, throw an error
    if (!response.ok) {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }

    // Otherwise just return the response
    return response;
}

function parseJSON(response) {
    return response.json();
}

app.get("/getrecipe", async (req, res, next) => {
    const recipes = await Recipe.find({}).exec();
    res.json(recipes);
});

app.post("/saverecipe", async (req, res, next) => {
    const recipeToBeCreated = req.body;
    const recipe = await Recipe.create(recipeToBeCreated);
    res.status(201).json(recipe);
});

app.post("/saveingredient", async (req, res, next) => {
    const ingredients = req.body;
    const savedIngredients = await Ingredient.create(ingredients);
});

app.get("/ingredient", async (req, res, next) => {
    const savedingredients = await Ingredient.find({}).exec();
    res.json(savedingredients);
});

app.get("/mongotest", (req, res, next) => {
    Cart.find({}).then(response => {
        res.send(response);
    });
});

app.post("/ingredientselection", (req, res, next) => {});

app.get("/api/recipe/:ingred", (req, res, next) => {
    console.log("herhe");
    let string = req.params.ingred;
    let user = { shopperID: req.sessionID };

    if (req.session.visited) {
        Cart.findOneAndUpdate(req.sessionID, { items: string }).then(cart => {
            console.log(cart);
        });
    } else {
        req.session.visited = true;

        Cart.create({ items: string, ShopperID: req.sessionID }).then(cart => {
            console.log(cart);
        });
    }

    fetch(`${baseUrl}${string}`, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": `${RECIPE_KEY}`
        }
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(json => {
            let newResult = json.map(recipe => {
                return {
                    id: recipe.id,
                    image: recipe.image,
                    title: recipe.title
                };
            });

            res.json(newResult);
        })
        .catch(error => {
            next(error);
        });
});

app.get("/api/fullrecipe/:id", (req, res, next) => {
    let recipeId = req.params.id;
    fetch(`${recipeDetailUrl}${recipeId}/information`, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": `${RECIPE_KEY}`
        }
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(json => {
            let newResult = {
                ingredients: json.extendedIngredients,
                instructions: json.instructions
            };

            console.log(newResult);
            res.json(newResult);
        })
        .catch(error => {
            next(error);
        });
});

//JSON properties to extract: extendedIngredients,instructions,image
//recipeSearch extract : let newResult = result.map(recipe=>{
//return {id: recipe.id,image: recipe.image, title: recipe.title}

//})

function errorHandler(err, req, res, next) {
    console.error("Error: ", err.stack);
    res.status(err.response ? err.response.status : 500);
    res.json({ error: err.message });
}

app.use(errorHandler);
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`);
});
