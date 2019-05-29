class Picker {

    /**
     * Entity used to randomly pick an option among the given ones
     * @constructor
     * @param {String} options - array containing the options & their associated weight
     */
    constructor(options) {
        try {
            this.options = JSON.parse(options);
            this.weightedResults = [];
            this.results = this.options;
            this.totalWeight = 0;
        } catch (e) { // Malformed JSON array
            console.log(e);
        }
    }

    /**
     * Shuffles the optionsArray into results using the Fisher-Yates shuffle algorithm
     */
    randomize() {
        this.results = [...this.options]; // Cloning the array
        let elemNumber = this.results.length;

        // While there is an element
        while (elemNumber) {
            // Pick an element
            let index = Math.floor(Math.random() * elemNumber--);
            // Swap this element and the current one
            let temp = this.results[elemNumber];
            this.results[elemNumber] = this.results[index];
            this.results[index] = temp;
        }
    }

    /**
     * Calculates the sum of all the weights
     */
    calculateTotalWeight() {
        let picker = this;
        this.options.forEach(function(elem) {
            picker.totalWeight += elem.weight;
        });
    }

    /**
     * Returns an element chosen randomly with weight
     * @return {JSON} the chosen element
     */
    randomizeWithWeight() {
        this.calculateTotalWeight();
        let random = Math.floor(Math.random() * this.totalWeight) + 1;

        for(let elem of this.options) {
            random = random - elem.weight;
            if(random <= 0) {
                return elem;
            }
        }
    }

    /**
     * Returns the original JSON object given
     * @returns {JSON}
     */
    getBaseOptions() {
        return this.options;
    }

    /**
     * Returns the results according to the weights
     * @returns {Array}
     */
    getWeightedResults() {
        return this.weightedResults;
    }

    /**
     * Returns the results without taking weight into consideration
     * @returns {Array}
     */
    getResults() {
        return this.results;
    }

    /**
     * Returns the sum of all the weights
     * @returns {number|*}
     */
    getTotalWeight() {
        return this.totalWeight;
    }
}

module.exports = Picker;