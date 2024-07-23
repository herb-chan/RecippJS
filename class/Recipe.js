/**
 * Represents a Recipe.
 * @class
 */
class Recipe {
    /**
     * Creates a new Recipe instance.
     * @param {Object} recipeData - The data for the recipe.
     * @param {number} recipeData.id - The unique ID of the recipe.
     * @param {string} recipeData.title - The title of the recipe.
     * @param {string} recipeData.description - A description of the recipe.
     * @param {string} recipeData.imagePath - The file path or URL to the recipe image.
     * @param {number} recipeData.prepTime - The preparation time in minutes.
     * @param {number} recipeData.servingSize - The number of servings the recipe makes.
     * @param {string} recipeData.category - The category or type of the recipe (e.g., dessert, main course).
     * @param {string[]} recipeData.steps - The steps required to prepare the recipe.
     * @param {string[]} recipeData.allergies - A list of allergies that the recipe may contain.
     * @param {string[]} recipeData.diets - A list of dietary considerations for the recipe (e.g., vegan, gluten-free).
     * @param {Date} recipeData.createdAt - The date when the recipe was created.
     * @param {Date} recipeData.updatedAt - The date when the recipe was last updated.
     * @example
     * const recipeData = {
     *   id: 1,
     *   title: "Spaghetti Carbonara",
     *   description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
     *   imagePath: "assets/images/spaghetti_carbonara.jpg",
     *   prepTime: 20,
     *   servingSize: 2,
     *   category: "Italian",
     *   steps: [
     *     "Boil the pasta.",
     *     "Cook the pancetta.",
     *     "Mix eggs and cheese.",
     *     "Combine pasta with pancetta and egg mixture."
     *   ],
     *   allergies: ["Eggs", "Dairy"],
     *   diets: ["Vegetarian"],
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
        return this.recipeData.imagePath;
    }

    /**
     * Get the preparation time of the recipe.
     * @returns {number} The preparation time in minutes.
     * @example
     * const prepTime = recipe.preparationTime();
     * console.log(prepTime);
     */
    preparationTime() {
        return this.recipeData.prepTime;
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
     * Get the category of the recipe.
     * @returns {string} The recipe category.
     * @example
     * const category = recipe.category();
     * console.log(category);
     */
    category() {
        return this.recipeData.category;
    }

    /**
     * Get the steps for the recipe.
     * @returns {string[]} The steps for the recipe.
     * @example
     * const steps = recipe.steps();
     * console.log(steps);
     */
    steps() {
        return this.recipeData.steps;
    }

    /**
     * Get the allergies information for the recipe.
     * @returns {string[]} The allergies information.
     * @example
     * const allergies = recipe.allergies();
     * console.log(allergies);
     */
    allergies() {
        return this.recipeData.allergies;
    }

    /**
     * Get the diets information for the recipe.
     * @returns {string[]} The diets information.
     * @example
     * const diets = recipe.diets();
     * console.log(diets);
     */
    diets() {
        return this.recipeData.diets;
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
