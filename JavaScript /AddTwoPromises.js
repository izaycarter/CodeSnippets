/*
Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. 
The returned promise should resolve with the sum of the two numbers.
*/
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let firstValue = await promise1;
    let secondValue = await promise2;
    return firstValue + secondValue;
    // OR
    // return Promise.all([promise1, promise2]).then(values => values[0] + values[1]);
};
// Example usage
//const promise1 = new Promise((resolve) => setTimeout(() => resolve(5), 1000));
