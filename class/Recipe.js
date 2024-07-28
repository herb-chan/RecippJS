/**
 * Represents a Recipe.
 * @class
 */
class Recipe {
    /**
     * @typedef {Object} NutritionElement
     * @property {string} name The name of the nutritional element.
     * @property {number} amount The amount of the nutritional element.
     * @property {string} unit The unit of the nutritional element (e.g., "g", "kcal").
     * @property {number} percentageDailyNeeds The percentage of daily needs for the nutritional element.
     */

    /**
     * @typedef {Object} Nutrition
     * @property {NutritionElement} calories The calories information.
     * @property {NutritionElement} fat The fat information.
     * @property {NutritionElement} carbs The carbohydrates information.
     * @property {NutritionElement} protein The protein information.
     */

    /**
     * @typedef {Object} Diets
     * @property {string} dietType The type of diet (e.g., vegan, keto).
     */

    /**
     * @typedef {Object} Intolerances
     * @property {string} allergen The allergen (e.g., peanuts, dairy).
     */

    /**
     * @typedef {Object} Steps
     * @property {string} step The step in the preparation process.
     */

    /**
     * @typedef {Object} Ingredient
     * @property {string} name The name of the ingredient.
     * @property {string} quantity The quantity of the ingredient.
     */

    /**
     * Creates a new Recipe instance.
     * @param {Object} recipeData The data for the recipe.
     * @param {number} recipeData.id The unique ID of the recipe.
     * @param {string} recipeData.title The title of the recipe.
     * @param {string} recipeData.description A description of the recipe.
     * @param {string} recipeData.image The file path or URL to the recipe image.
     * @param {number} recipeData.preparationTime The preparation time in minutes.
     * @param {number} recipeData.servingSize The number of servings the recipe makes.
     * @param {string} recipeData.cuisine The cuisine or type of the recipe (e.g., Chinese, Italian).
     * @param {string} recipeData.type The type of recipe (e.g., main course, dessert).
     * @param {Steps[]} recipeData.steps The steps required to prepare the recipe.
     * @param {Intolerances[]} recipeData.intolerances A list of intolerances that the recipe may contain.
     * @param {Diets[]} recipeData.diets A list of dietary considerations for the recipe (e.g., vegan, gluten-free).
     * @param {Ingredient[]} recipeData.ingredients A list of ingredients with quantities.
     * @param {string[]} recipeData.equipment A list of equipment needed for the recipe.
     * @param {Nutrition} recipeData.nutrition Nutritional information.
     * @param {number} recipeData.starCount The number of stars the recipe has received.
     * @param {Date} recipeData.createdAt The date when the recipe was created.
     * @param {Date} recipeData.updatedAt The date when the recipe was last updated.
     * @example
     * const recipeData = {
     *   id: 1,
     *   title: "Spaghetti Carbonara",
     *   description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
     *   imagePath: "assets/images/spaghetti_carbonara.jpg",
     *   prepTime: 20,
     *   servingSize: 2,
     *   cuisine: "Italian",
     *   type: "Main Course",
     *   steps: [
     *     "Boil the pasta.",
     *     "Cook the pancetta.",
     *     "Mix eggs and cheese.",
     *     "Combine pasta with pancetta and egg mixture."
     *   ],
     *   intolerances: ["Eggs", "Dairy"],
     *   diets: ["Vegetarian"],
     *   ingredients: [
     *     { name: "Spaghetti", quantity: "200g" },
     *     { name: "Eggs", quantity: "2" },
     *     { name: "Pancetta", quantity: "100g" },
     *     { name: "Parmesan Cheese", quantity: "50g" }
     *   ],
     *   equipment: ["Pot", "Pan", "Mixing Bowl"],
     *   nutrition: {
     *     calories: { name: "Calories", amount: 500, unit: "kcal", percentageDailyNeeds: 25 },
     *     fat: { name: "Fat", amount: 20, unit: "g", percentageDailyNeeds: 31 },
     *     carbs: { name: "Carbohydrates", amount: 60, unit: "g", percentageDailyNeeds: 20 },
     *     protein: { name: "Protein", amount: 20, unit: "g", percentageDailyNeeds: 40 }
     *   },
     *   starCount: 0,
     *   createdAt: new Date(),
     *   updatedAt: new Date()
     * };
     * const recipe = new Recipe(recipeData);
     */
    constructor(recipeData) {
        this.recipeData = recipeData;
    }

    /**
     * Get the ID of the recipe.
     * @returns {number} The recipe ID.
     * @example
     * const id = recipe.id();
     * console.log(id);
     */
    id() {
        return this.recipeData.id;
    }

    /**
     * Get the title of the recipe.
     * @returns {string} The recipe title.
     * @example
     * const title = recipe.title();
     * console.log(title);
     */
    title() {
        return this.recipeData.title;
    }

    /**
     * Get the description of the recipe.
     * @returns {string} The recipe description.
     * @example
     * const description = recipe.description();
     * console.log(description);
     */
    description() {
        return this.recipeData.description;
    }

    /**
     * Get the image path of the recipe.
     * @returns {string} The image path.
     * @example
     * const image = recipe.image();
     * console.log(image);
     */
    image() {
        return this.recipeData.image;
    }

    /**
     * Get the preparation time of the recipe.
     * @returns {number} The preparation time in minutes.
     * @example
     * const prepTime = recipe.preparationTime();
     * console.log(prepTime);
     */
    preparationTime() {
        return this.recipeData.preparationTime;
    }

    /**
     * Get the servings size of the recipe.
     * @returns {number} The number of servings.
     * @example
     * const servings = recipe.servings();
     * console.log(servings);
     */
    servings() {
        return this.recipeData.servingSize;
    }

    /**
     * Get the cuisine of the recipe.
     * @returns {string} The recipe cuisine.
     * @example
     * const cuisine = recipe.cuisine();
     * console.log(cuisine);
     */
    cuisine() {
        return this.recipeData.cuisine;
    }

    /**
     * Get the type of the recipe.
     * @returns {string} The recipe type.
     * @example
     * const type = recipe.type();
     * console.log(type);
     */
    type() {
        return this.recipeData.type;
    }

    /**
     * Get the steps for the recipe.
     * @returns {Steps[]} The steps for the recipe.
     * @example
     * const steps = recipe.steps();
     * console.log(steps);
     */
    steps() {
        return this.recipeData.steps;
    }

    /**
     * Get the intolerances information for the recipe.
     * @returns {Intolerances[]} The intolerances information.
     * @example
     * const intolerances = recipe.intolerances();
     * console.log(intolerances);
     */
    intolerances() {
        return this.recipeData.intolerances;
    }

    /**
     * Get the diets information for the recipe.
     * @returns {Diets[]} The diets information.
     * @example
     * const diets = recipe.diets();
     * console.log(diets);
     */
    diets() {
        return this.recipeData.diets;
    }

    /**
     * Get the ingredients for the recipe.
     * @returns {Ingredient[]} The ingredients.
     * @example
     * const ingredients = recipe.ingredients();
     * ingredients.forEach((ingredient) => {
     *     console.log(ingredient.name, ingredient.quantity);
     * });
     */
    ingredients() {
        return this.recipeData.ingredients;
    }

    /**
     * Get the equipment for the recipe.
     * @returns {string[]} The equipment.
     * @example
     * const equipment = recipe.equipment();
     * console.log(equipment);
     */
    equipment() {
        return this.recipeData.equipment;
    }

    /**
     * Get the nutrition information for the recipe.
     * @returns {Nutrition} The nutrition information.
     * @example
     * const nutrition = recipe.nutrition();
     * console.log(nutrition.calories.amount, nutrition.fat.amount, nutrition.carbs.amount, nutrition.protein.amount);
     */
    nutrition() {
        return this.recipeData.nutrition;
    }

    /**
     * Get the star count of the recipe.
     * @returns {number} The star count.
     * @example
     * const starCount = recipe.starCount();
     * console.log(starCount);
     */
    starCount() {
        return this.recipeData.starCount;
    }

    /**
     * Get the creation date of the recipe.
     * @returns {Date} The creation date.
     * @example
     * const createdAt = recipe.createdAt();
     * console.log(createdAt);
     */
    createdAt() {
        return this.recipeData.createdAt;
    }

    /**
     * Get the last updated date of the recipe.
     * @returns {Date} The last updated date.
     * @example
     * const updatedAt = recipe.updatedAt();
     * console.log(updatedAt);
     */
    updatedAt() {
        return this.recipeData.updatedAt;
    }
}

module.exports = Recipe;
