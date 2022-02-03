const allRecipes = [
  {
    id: 100,
    recipeName: "Mushroom Biryani",
    foodType: "veg",
    ingredientsRequired: "Mushroom",
    stepsToPrepare: "cook",
    recipeImage: {
      url: "/images/Mushroom.jpeg",
      altInfo: "Mushroom Biryani",
    },
  },
  {
    id: 101,
    recipeName: "Mutton Biryani",
    foodType: "Non-veg",
    ingredientsRequired: "Mutton",
    stepsToPrepare: "cook",
    recipeImage: {
      url: "/images/Mutton.jpeg",
      altInfo: "Mutton Biryani",
    },
  },
];
//Get one recipe:
const getOneRecipe = (recipeId) => {
  //const oneRecipe = allRecipes.find((m) => m.id == recipeId);
  const oneRecipe = allRecipes.find((m) => m.id == recipeId);
  return oneRecipe;
};
//add a recipe:
const addOneRecipe = (payload) => {
  const addrecipe = {
    id: new Date().getTime(),
    ...payload,
  };
  allRecipes.push(addrecipe);
  return addrecipe;
};
//delete a recipe:
const deleteOneMovie = (deleteId) => {
  const deleteIndex = allRecipes.findIndex((m) => m.id == deleteId);
  if (deleteIndex == -1) {
    console.log(`movie id ${deleteIndex} not found`);
  }
  allRecipes.splice(deleteIndex, 1);
};
//update a recipe
const updateRecipe = (recipeId, payload) => {
  const updateIndex = allRecipes.findIndex((m) => m.id == recipeId);
  if (updateIndex != -1) {
    allRecipes[updateIndex]["recipeName"] = payload.recipeName;
    allRecipes[updateIndex]["foodType"] = payload.foodType;
    allRecipes[updateIndex]["ingredientsRequired"] =
      payload.ingredientsRequired;
    allRecipes[updateIndex]["stepsToPrepare"] = payload.stepsToPrepare;
    allRecipes[updateIndex]["recipeImage"] = payload.recipeImage;
  } else {
    console.log(`movie id ${recipeId} cannot be updated`);
  }
  return { ...allRecipes[updateIndex] };
};
module.exports = {
  allRecipes,
  getOneRecipe,
  addOneRecipe,
  deleteOneMovie,
  updateRecipe,
};
