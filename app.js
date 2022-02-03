const express = require("express");
const cors = require("cors");
const db = require("./db");
const port = 8080;
const app = express();
app.use(cors());
app.use(express.json());
app.listen(port, (err) => {
  if (err) {
    console.log(err);
    console.log(`cannot run on ${port} now`);
    PromiseRejectionEvent.exit(1);
  }
  console.log(`server running on ${port}`);
});

//empty page:
app.get("/", (req, res) => {
  return res.send("welcome to Recipe Page");
});
//Get all recipes:
app.get("/recipes", (req, res) => {
  const allRecipes = db.allRecipes;
  return res.send(allRecipes);
});
//Get one recipe:
app.get("/recipes/:id", (req, res) => {
  const recipeId = req.params.id;
  const oneRecipe = db.getOneRecipe(recipeId);
  console.log("one recipe" + oneRecipe);
  if (!oneRecipe) {
    return res.status(404).send({
      message: `recipe ${recipeId} not found`,
    });
  }
  return res.send(oneRecipe);
});
//add a recipe:
app.post("/recipes", (req, res) => {
  const payload = req.body;
  const addrecipe = db.addOneRecipe(payload);
  if (
    !payload.recipeName ||
    !payload.foodType ||
    !payload.ingredientsRequired ||
    !payload.stepsToPrepare ||
    !payload.recipeImage ||
    !payload.recipeImage.url ||
    !payload.recipeImage.altInfo
  ) {
    return res.status(404).send({
      message: "Enter all details",
    });
  }
  return res.send(addrecipe);
});
//delete a recipe:
app.delete("/recipes/:id", (req, res) => {
  const deleteId = req.params.id;
  console.log(deleteId);
  db.deleteOneMovie(deleteId);
  return res.send({
    message: "recipe deleted",
  });
});
//update a recipe
app.put("/recipes/:id", (req, res) => {
  const recipeId = req.params.id;
  const payload = req.body;
  const updateRecipe = db.updateRecipe(recipeId, payload);
  if (
    !payload.recipeName ||
    !payload.foodType ||
    !payload.ingredientsRequired ||
    !payload.stepsToPrepare ||
    !payload.recipeImage
  ) {
    return res.status(404).send({
      message: "Enter all details",
    });
  }
  return res.send(updateRecipe);
});
