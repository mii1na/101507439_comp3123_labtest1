const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        // check if the input is an array
        if (!Array.isArray(array)) {
            reject("input must be an array");
            return;
        }
        // keep only the string values
        const words = array.filter(item => typeof item === "string");

        // change all words to lowercase
        const lowerWords = words.map(word => word.toLowerCase());
        // return the final result
        resolve(lowerWords);
    });
}
// call the function and print the result
lowerCaseWords(mixedArray)
    .then(result => { console.log(result); })
    .catch(error => { console.log(error); });