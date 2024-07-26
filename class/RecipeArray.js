const Recipe = require("./Recipe");

/**
 * Represents an array of Recipe objects with sorting methods.
 * @class
 * @extends {Array<Recipe>}
 */
class RecipeArray extends Array {
    /**
     * Sort recipes by serving size.
     * @param {string} [order='asc'] The order to sort ('asc' for ascending, 'desc' for descending).
     * @returns {RecipeArray} The sorted array.
     */
    sortByServingSize(order = "asc") {
        return /** @type {RecipeArray} */ (
            this.sort((a, b) => {
                const comparison = a.servings() - b.servings();
                return order === "desc" ? -comparison : comparison;
            })
        );
    }

    /**
     * Sort recipes by preparation time.
     * @param {string} [order='asc'] The order to sort ('asc' for ascending, 'desc' for descending).
     * @returns {RecipeArray} The sorted array.
     */
    sortByPreparationTime(order = "asc") {
        return /** @type {RecipeArray} */ (
            this.sort((a, b) => {
                const comparison = a.preparationTime() - b.preparationTime();
                return order === "desc" ? -comparison : comparison;
            })
        );
    }

    /**
     * Sort recipes by star count.
     * @param {string} [order='asc'] The order to sort ('asc' for ascending, 'desc' for descending).
     * @returns {RecipeArray} The sorted array.
     */
    sortByStarCount(order = "asc") {
        return /** @type {RecipeArray} */ (
            this.sort((a, b) => {
                const comparison = a.starCount() - b.starCount();
                return order === "desc" ? -comparison : comparison;
            })
        );
    }

    /**
     * Sort recipes by the amount of ingredients.
     * @param {string} [order='asc'] The order to sort ('asc' for ascending, 'desc' for descending).
     * @returns {RecipeArray} The sorted array.
     */
    sortByIngredientsAmount(order = "asc") {
        return /** @type {RecipeArray} */ (
            this.sort((a, b) => {
                const comparison =
                    a.ingredients().length - b.ingredients().length;
                return order === "desc" ? -comparison : comparison;
            })
        );
    }

    /**
     * Sort recipes by the amount of diets they are suitable for.
     * @param {string} [order='asc'] The order to sort ('asc' for ascending, 'desc' for descending).
     * @returns {RecipeArray} The sorted array.
     */
    sortByDietsAmount(order = "asc") {
        return /** @type {RecipeArray} */ (
            this.sort((a, b) => {
                const comparison = a.diets().length - b.diets().length;
                return order === "desc" ? -comparison : comparison;
            })
        );
    }

    /**
     * Sort recipes by the amount of allergies they might cause.
     * @param {string} [order='asc'] The order to sort ('asc' for ascending, 'desc' for descending).
     * @returns {RecipeArray} The sorted array.
     */
    sortByAllergiesAmount(order = "asc") {
        return /** @type {RecipeArray} */ (
            this.sort((a, b) => {
                const comparison = a.allergies().length - b.allergies().length;
                return order === "desc" ? -comparison : comparison;
            })
        );
    }

    /**
     * Sort recipes by the amount of calories they have.
     * @param {string} [order='asc'] The order to sort ('asc' for ascending, 'desc' for descending).
     * @returns {RecipeArray} The sorted array.
     */
    sortByCaloriesAmount(order = "asc") {
        return /** @type {RecipeArray} */ (
            this.sort((a, b) => {
                const comparison =
                    a.nutrition().calories - b.nutrition().calories;
                return order === "desc" ? -comparison : comparison;
            })
        );
    }

    /**
     * Sort recipes by the amount of steps they have.
     * @param {string} [order='asc'] The order to sort ('asc' for ascending, 'desc' for descending).
     * @returns {RecipeArray} The sorted array.
     */
    sortByStepsAmount(order = "asc") {
        return /** @type {RecipeArray} */ (
            this.sort((a, b) => {
                const comparison = a.steps().length - b.steps().length;
                return order === "desc" ? -comparison : comparison;
            })
        );
    }
}

module.exports = RecipeArray;
