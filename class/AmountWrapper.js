/**
 * A wrapper class for array-like objects that adds an `amount` method.
 */
class AmountWrapper {
    /**
     * Creates an instance of AmountWrapper.
     * @param {Array<any>} items - The items to wrap.
     * @example
     * const ingredients = new AmountWrapper(['salt', 'pepper', ' ']);
     * console.log(ingredients.amount());
     */
    constructor(items) {
        this.items = items;
    }

    /**
     * Get the amount of items in the array.
     * This method handles empty arrays in the database by checking for empty strings or strings with just spaces.
     * Works with any Array that is wrapped in AmountWrapper class.
     * @returns {number} The amount of items in the array.
     * @example
     * const allRecipes = await Recipp.getAllRecipes();
     * allRecipes.forEach((recipe) => {
     *     console.log(
     *         `${recipe.title()} - Diets amount: ${recipe.diets().amount()}`
     *     );
     * });
     */
    amount() {
        // Filter out empty strings or strings with only spaces and count non-empty elements
        const nonEmptyItems = this.items.filter((item) => item.trim() !== "");
        return nonEmptyItems.length;
    }
}

module.exports = AmountWrapper;
