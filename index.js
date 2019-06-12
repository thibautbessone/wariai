class Picker {

    /**
     * Entity used to randomly pick an option among the given ones
     * @constructor
     * @param {String} options - array containing the options & their associated weight
     */
    constructor(options) {
        try {
            this.options = JSON.parse(options);
            this.results = this.options;
            this.totalWeight = 0;
        } catch (e) { // Malformed JSON array
            console.log(e);
        }
    }

    /**
     * Shuffles the optionsArray into results using the Fisher-Yates shuffle algorithm
     * @return {Array} this.results - the randomized values
     */
    getRandomizedList() {
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
        return this.results;
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
     * @return {JSON} elem - the chosen element
     */
    pickOneWithWeight() {
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
     * @returns {JSON} this.options - the original options
     */
    getBaseOptions() {
        return this.options;
    }

    /**
     * Returns the sum of all the weights
     * @returns {number|*} this.totalWeight - sum of all the weights
     */
    getTotalWeight() {
        return this.totalWeight;
    }
}

module.exports = Picker;