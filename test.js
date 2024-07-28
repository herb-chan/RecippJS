const Recipe = require("./class/Recipe");
const RecippApiWrapper = require("./src/recippApiWrapper");
const Recipp = new RecippApiWrapper("http://localhost:3000");

(async () => {
    const recipe = await Recipp.getRecipeById(1);
    const recipes = await Recipp.getAllRecipes();
    // console.log(
    //     recipe.nutrition().fat,
    //     recipe.nutrition().carbs,
    //     recipe.nutrition().calories,
    //     recipe.nutrition().protein
    // );
    // console.log(recipe.ingredients().length);
    // recipe.ingredients().forEach((ingredient) => {
    //     console.log(ingredient.name, ingredient.quantity);
    // });
    // recipes.sortByAllergiesAmount();
    // recipes.sortByDietsAmount();
    // recipes.forEach((recipe) => {
    //     console.log(`${recipe.title()} - Diets: ${recipe.diets().length}`);
    // });
    // console.log("------------------------------------------");
    // recipes.sortByAllergiesAmount();
    // recipes.forEach((recipe) => {
    //     console.log(
    //         `${recipe.title()} - Allergies: ${recipe.allergies().length}`
    //     );
    // });
    // console.log("------------------------------------------");
    // recipes.forEach((recipe) => {
    //     console.log(`${recipe.title()} - Steps: ${recipe.steps().length}`);
    // });
    // recipes.sortByStepsAmount();
    // recipes.forEach((recipe) => {
    //     console.log(
    //         `${recipe.title()} - Steps amount: ${recipe.steps().length}`
    //     );
    // });
    // recipe.nutrition().forEach((nutrition) => {
    //     console.log(
    //         `${nutrition.name} ${nutrition.amount}${nutrition.unit} - ${nutrition.percentageDailyNeeds}%`
    //     );
    // });
    // console.log(recipe.nutrition().calories.name);
    const recipes_by_ingredient = await Recipp.searchByExcludedIngredients([
        "dough",
        "rice",
    ]);
    recipes_by_ingredient.forEach((recipe) => {
        console.log(recipe.title());
    });
})().catch((error) => {
    console.error("Error in API calls:", error);
});
