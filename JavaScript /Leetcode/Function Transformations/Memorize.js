/*
Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
*/
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        // For the specific use cases mentioned (sum, fib, factorial)
        // we can create very efficient keys
        let key;
        
        if (args.length === 1) {
            // For single argument functions like fib and factorial
            key = args[0];
        } else if (args.length === 2) {
            // For two argument functions like sum
            // Create a key that differentiates between (a,b) and (b,a)
            key = `${args[0]},${args[1]}`;
        } else {
            // Fallback for other cases
            key = JSON.stringify(args);
        }
        
        // Check if we have the result cached
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        // Calculate and cache the result
        const result = fn(...args);
        cache.set(key, result);
        
        return result;
    };
}
