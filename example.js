const RecippApiWrapper = require("./src/recippApiWrapper");
const Recipp = new RecippApiWrapper("http://localhost:3000");

(async () => {
    // Get all recipes
    console.log("=== Get All Recipes ===");
    const allRecipes = await Recipp.getAllRecipes();
    allRecipes.forEach((recipe) => {
        console.log(recipe.title());
    });

    // Get a recipe by ID
    console.log("\n=== Get Recipe by ID ===");
    const recipe = await Recipp.getRecipeById(1);
    console.log(
        `Title: ${recipe.title()}, Preparation Time: ${recipe.preparationTime()} minutes`
    );

    // Search for recipes
    console.log("\n=== Search Recipes ===");
    const searchResults = await Recipp.searchRecipes("Chicken");
    searchResults.forEach((recipe) => {
        console.log(`${recipe.title()} - Star Count: ${recipe.starCount()}`);
    });

    // Sort search results by serving size
    console.log("\n=== Sorted by Serving Size ===");
    allRecipes.sortByServingSize();
    allRecipes.forEach((recipe) => {
        console.log(`${recipe.title()} - Serving Size: ${recipe.servings()}`);
    });

    // Sort search results by preparation time
    console.log("\n=== Sorted by Preparation Time ===");
    allRecipes.sortByPreparationTime();
    allRecipes.forEach((recipe) => {
        console.log(
            `${recipe.title()} - Preparation Time: ${recipe.preparationTime()} minutes`
        );
    });

    // Sort search results by star count
    console.log("\n=== Sorted by Star Count ===");
    allRecipes.sortByStarCount();
    allRecipes.forEach((recipe) => {
        console.log(`${recipe.title()} - Star Count: ${recipe.starCount()}`);
    });

    // Star a recipe
    console.log("\n=== Star a Recipe ===");
    const starResponse = await Recipp.starRecipe(4);
    console.log(starResponse.message);
    console.log(`Recipe 4 now has ${starResponse.starCount} stars.`);
})().catch((error) => {
    console.error("Error in API calls:", error);
});
