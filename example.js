const RecippApiWrapper = require("./src/recippApiWrapper");
const Recipp = new RecippApiWrapper("http://localhost:3000");

(async () => {
    // Get all recipes
    const recipes = await Recipp.getAllRecipes();
    recipes.forEach((recipe) => {
        console.log(recipe.title());
    });

    // Get a recipe by ID
    const recipe = await Recipp.getRecipeById(1);
    console.log(recipe.preparationTime());

    // Search for recipes
    const searchResults = await Recipp.searchRecipes("Spaghetti");
    searchResults.forEach((recipe) => {
        console.log(recipe.starCount());
    });

    // Star a recipe
    const starResponse = await Recipp.starRecipe(4);
    console.log(starResponse.message);
    console.log(`Recipe 1 has ${starResponse.starCount} stars.`);
})();
