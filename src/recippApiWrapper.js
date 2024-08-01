const axios = require("axios");
const Recipe = require("../class/Recipe");
const RecipeArray = require("../class/RecipeArray");

/**
 * Wrapper for interacting with the Recipp API.
 * @class
 */
class RecippApiWrapper {
    /**
     * Creates an instance of RecippApiWrapper.
     * @param {string} baseURL The base URL of the API.
     * @example
     * const Recipp = new RecippApiWrapper("http://localhost:3000");
     */
    constructor(baseURL) {
        this.client = axios.create({ baseURL });
    }

    /**
     * Makes an API request.
     * @async
     * @param {string} method The HTTP method.
     * @param {string} endpoint The API endpoint.
     * @param {Object} [params={}] The query parameters.
     * @param {Object} [data={}] The request body.
     * @returns {Promise<Object>} The response data.
     * @throws {Error} If the request fails.
     * @example
     * const data = await Recipp.request("get", "/recipes");
     * console.log(data);
     */
    async request(method, endpoint, params = {}, data = {}) {
        try {
            const response = await this.client.request({
                method,
                url: endpoint,
                params,
                data,
            });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    /**
     * Handles errors from API requests.
     * @param {Error} error The error object.
     * @example
     * try {
     *     const data = await Recipp.request("get", "/invalid-endpoint");
     * } catch (error) {
     *     Recipp.handleError(error);
     * }
     */
    handleError(error) {
        if (error.response) {
            console.error("Error Response:", error.response.data);
        } else if (error.request) {
            console.error("Error Request:", error.request);
        } else {
            console.error("Error Message:", error.message);
        }
        throw error;
    }

    /**
     * Retrieves all recipes.
     * @async
     * @returns {Promise<RecipeArray>} A list of all recipes.
     * @example
     * const recipes = await Recipp.getAllRecipes();
     * recipes.forEach(recipe => {
     *     console.log(recipe.title());
     * });
     */
    async getAllRecipes() {
        const data = await this.request("get", "api/recipes");
        return new RecipeArray(
            ...data.map((recipeData) => new Recipe(recipeData))
        );
    }

    /**
     * Retrieves a recipe by its ID.
     * @async
     * @param {number} id The recipe ID.
     * @returns {Promise<Recipe>} The recipe object.
     * @example
     * const recipe = await Recipp.getRecipeById(1);
     * console.log(recipe.title());
     */
    async getRecipeById(id) {
        const data = await this.request("get", `api/recipes/${id}`);
        return new Recipe(data);
    }

    /**
     * Searches for recipes by a query.
     * @async
     * @param {string} query The search query.
     * @returns {Promise<RecipeArray>} A list of recipes that match the query.
     * @example
     * const searchResults = await Recipp.searchRecipes("Chicken");
     * searchResults.forEach(recipe => {
     *     console.log(recipe.title());
     * });
     */
    async searchRecipes(query) {
        const data = await this.request("get", `api/search`, { q: query });
        return new RecipeArray(
            ...data.map((recipeData) => new Recipe(recipeData))
        );
    }

    /**
     * Searches for recipes by ingredients.
     * @async
     * @param {string[]} ingredients The ingredients to search for.
     * @returns {Promise<RecipeArray>} A list of recipes that contain the specified ingredients.
     * @example
     * const recipes = await Recipp.searchByIngredients(["cheese", "dough"]);
     * recipes.forEach(recipe => {
     *     console.log(recipe.title());
     * });
     */
    async searchByIngredients(ingredients) {
        const query = ingredients.join(",");
        const data = await this.request("get", "api/searchByIngredients", {
            ingredients: query,
        });
        return new RecipeArray(
            ...data.map((recipeData) => new Recipe(recipeData))
        );
    }

    /**
     * Searches for recipes by excluded ingredients.
     * @async
     * @param {string[]} ingredients The ingredients to search for.
     * @returns {Promise<RecipeArray>} A list of recipes that aren't containing specified ingredients.
     * @example
     * const recipes = await Recipp.searchByExcludedIngredients(["cheese", "dough"]);
     * recipes.forEach(recipe => {
     *     console.log(recipe.title());
     * });
     */
    async searchByExcludedIngredients(ingredients) {
        const query = ingredients.join(",");
        const data = await this.request(
            "get",
            "api/searchByExcludedIngredients",
            {
                ingredients: query,
            }
        );
        return new RecipeArray(
            ...data.map((recipeData) => new Recipe(recipeData))
        );
    }

    /**
     * Searches for recipes using a complex search query.
     * @async
     * @param {Object} query The search parameters.
     * @param {string} [query.title] The title of the recipe.
     * @param {string} [query.cuisine] The cuisine type.
     * @param {string} [query.excludedCuisine] The cuisine type to exclude.
     * @param {string[]} [query.diets] The diets to include.
     * @param {string[]} [query.intolerances] The intolerances to exclude.
     * @param {string[]} [query.equipment] The equipment to include.
     * @param {string[]} [query.ingredients] The ingredients to include.
     * @param {string[]} [query.excludedIngredients] The ingredients to exclude.
     * @param {string} [query.type] The type of the recipe.
     * @param {number} [query.maxReadyInTime] The maximum ready time in minutes.
     * @param {number} [query.maxCookingTime] The maximum cooking time in minutes.
     * @param {number} [query.maxPreparationTime] The maximum preparation time in minutes.
     * @param {number} [query.minServings] The minimum number of servings.
     * @param {number} [query.maxServings] The maximum number of servings.
     * @param {number} [query.minCalories] The minimum number of calories.
     * @param {number} [query.maxCalories] The maximum number of calories.
     * @param {number} [query.minFat] The minimum amount of fat.
     * @param {number} [query.maxFat] The maximum amount of fat.
     * @param {number} [query.minCarbs] The minimum amount of carbohydrates.
     * @param {number} [query.maxCarbs] The maximum amount of carbohydrates.
     * @param {number} [query.minProtein] The minimum amount of protein.
     * @param {number} [query.maxProtein] The maximum amount of protein.
     * @returns {Promise<RecipeArray>} A list of recipes that match the query.
     * @example
     * const searchParams = {
     *     title: "Pasta",
     *     cuisine: "Italian",
     *     diets: ["vegetarian"],
     *     maxCalories: 500,
     * };
     * const recipes = await Recipp.complexSearch(searchParams);
     * recipes.forEach(recipe => {
     *     console.log(recipe.title());
     * });
     */
    async complexSearch(query) {
        const data = await this.request("get", "api/complexSearch", query);
        return new RecipeArray(
            ...data.map((recipeData) => new Recipe(recipeData))
        );
    }

    /**
     * Stars a recipe by its ID.
     * @async
     * @param {number} id The recipe ID.
     * @returns {Promise<StarRecipeResponse>} The response containing a success message and the updated star count.
     * @throws {Error} If the request fails.
     * @example
     * const response = await Recipp.starRecipe(1);
     * console.log(`Recipe 1 has ${response.starCount} stars.`);
     */
    async starRecipe(id) {
        const data = await this.request("post", `api/recipes/${id}/star`);
        return data;
    }
}

module.exports = RecippApiWrapper;
