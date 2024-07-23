/**
 * Represents an array of Recipe objects with sorting methods.
 * @class
 * @extends {Array<Recipe>}
 */
class RecipeArray extends Array {
    /**
     * Sort recipes by serving size.
     * @param {string} [order='asc'] - The order to sort ('asc' for ascending, 'desc' for descending).
     * @returns {RecipeArray} The sorted array.
     * @example
     * const sortedByServingSize = recipes.sortByServingSize('asc');
     * sortedByServingSize.forEach(recipe => console.log(recipe.servings()));
     */
    sortByServingSize(order = "asc") {
        return this.sort((a, b) => {
            const comparison = a.servings() - b.servings();
            return order === "desc" ? -comparison : comparison;
        });
    }

    /**
     * Sort recipes by preparation time.
     * @param {string} [order='asc'] - The order to sort ('asc' for ascending, 'desc' for descending).
     * @returns {RecipeArray} The sorted array.
     * @example
     * const sortedByPrepTime = recipes.sortByPrepTime('asc');
     * sortedByPrepTime.forEach(recipe => console.log(recipe.preparationTime()));
     */
    sortByPrepTime(order = "asc") {
        return this.sort((a, b) => {
            const comparison = a.preparationTime() - b.preparationTime();
            return order === "desc" ? -comparison : comparison;
        });
    }

    /**
     * Sort recipes by star count.
     * @param {string} [order='asc'] - The order to sort ('asc' for ascending, 'desc' for descending).
     * @returns {RecipeArray} The sorted array.
     * @example
     * const sortedByStarCount = recipes.sortByStarCount('asc');
     * sortedByStarCount.forEach(recipe => console.log(recipe.starCount()));
     */
    sortByStarCount(order = "asc") {
        return this.sort((a, b) => {
            const comparison = a.starCount() - b.starCount();
            return order === "desc" ? -comparison : comparison;
        });
    }
}

module.exports = RecipeArray;
