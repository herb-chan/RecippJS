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

    // Display nutrition information for a specific recipe
    console.log("\n=== Nutrition Information ===");
    console.log(
        `Fat: ${recipe.nutrition().fat}, Carbs: ${
            recipe.nutrition().carbs
        }, Calories: ${recipe.nutrition().calories}, Protein: ${
            recipe.nutrition().protein
        }`
    );

    // Display ingredients for a specific recipe
    console.log("\n=== Ingredients ===");
    recipe.ingredients().forEach((ingredient) => {
        console.log(
            `Name: ${ingredient.name}, Quantity: ${ingredient.quantity}`
        );
    });

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
    allRecipes.sortByPreparationTime("asc");
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

    // Sort search results by the amount of ingredients
    console.log("\n=== Sorted by the Amount of Ingredients ===");
    allRecipes.sortByIngredientsAmount();
    allRecipes.forEach((recipe) => {
        console.log(
            `${recipe.title()} - Ingredients amount: ${
                recipe.ingredients().length
            }`
        );
    });

    // Sort recipes by the amount of diets they are suitable for
    console.log("\n=== Sorted by the Amount of Diets ===");
    allRecipes.sortByDietsAmount();
    allRecipes.forEach((recipe) => {
        console.log(`${recipe.title()} - Diets amount: ${recipe.diets()}`);
    });

    // Sort recipes by the amount of allergies they might cause
    console.log("\n=== Sorted by the Amount of Allergies ===");
    allRecipes.sortByAllergiesAmount();
    allRecipes.forEach((recipe) => {
        console.log(
            `${recipe.title()} - Ingredients amount: ${recipe.allergies()}`
        );
    });

    // Star a recipe
    console.log("\n=== Star a Recipe ===");
    const starResponse = await Recipp.starRecipe(4);
    console.log(starResponse.message);
    console.log(`Recipe 4 now has ${starResponse.starCount} stars.`);
})().catch((error) => {
    console.error("Error in API calls:", error);
});
