const axios = require("axios");
const Recipe = require("../class/Recipe");

/**
 * A wrapper for the Recipp API.
 * @class
 */
class RecippApiWrapper {
    /**
     * Creates an instance of RecippApiWrapper.
     * @param {string} baseURL - The base URL of the API.
     * @example
     * const Recipp = new RecippApiWrapper("http://localhost:3000");
     */
    constructor(baseURL) {
        this.client = axios.create({ baseURL });
    }

    /**
     * Makes a request to the API.
     * @async
     * @param {string} method - The HTTP method.
     * @param {string} endpoint - The API endpoint.
     * @param {Object} [params={}] - The query parameters.
     * @param {Object} [data={}] - The request body.
     * @returns {Promise<Object>} The response data.
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
     * Handles errors from the API requests.
     * @param {Error} error - The error object.
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
     * @returns {Promise<Recipe[]>} A list of all recipes.
     * @example
     * const recipes = await Recipp.getAllRecipes();
     * recipes.forEach(recipe => {
     *     console.log(recipe.title());
     * });
     */
    async getAllRecipes() {
        const data = await this.request("get", "/recipes");
        return data.map((recipeData) => new Recipe(recipeData));
    }

    /**
     * Retrieves a recipe by its ID.
     * @async
     * @param {number} id - The recipe ID.
     * @returns {Promise<Recipe>} The recipe object.
     * @example
     * const recipe = await Recipp.getRecipeById(1);
     * console.log(recipe.title());
     */
    async getRecipeById(id) {
        const data = await this.request("get", `/recipes/${id}`);
        return new Recipe(data);
    }

    /**
     * Searches for recipes by a query.
     * @async
     * @param {string} query - The search query.
     * @returns {Promise<Recipe[]>} A list of recipes that match the query.
     * @example
     * const searchResults = await Recipp.searchRecipes("Chicken");
     * searchResults.forEach(recipe => {
     *     console.log(recipe.title());
     * });
     */
    async searchRecipes(query) {
        const data = await this.request("get", `/search`, { q: query });
        return data.map((recipeData) => new Recipe(recipeData));
    }

    /**
     * Stars a recipe by its ID.
     * @async
     * @param {number} id - The recipe ID.
     * @returns {Promise<Object>} The updated star count.
     * @example
     * const response = await Recipp.starRecipe(1);
     * console.log(response.starCount);
     */
    async starRecipe(id) {
        const data = await this.request("post", `/recipes/${id}/star`);
        return data;
    }
}

module.exports = RecippApiWrapper;
