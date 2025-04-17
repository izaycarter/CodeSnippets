/* 
Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.
*/
/**
 * @param {Function} fn - The function to execute
 * @param {Array} args - Arguments to pass to the function
 * @param {number} t - Interval in milliseconds between function executions
 * @return {Function} - A function that cancels the interval when called
 */
function cancellable(fn, args, t) {
    // Execute the function immediately
    fn(...args);
    
    // Set up interval for repeated execution
    const intervalId = setInterval(() => {
      fn(...args);
    }, t);
    
    // Return cancel function that clears the interval
    return function cancelFn() {
      clearInterval(intervalId);
    };
  }
/* 
real world examples:
Stock Price Monitoring
 A financial application might need to fetch updated stock prices at regular intervals. 
 When a user navigates away from the stock view, you'd want to cancel these updates to save resources.

 Activity Monitoring
An application that checks if a user is still active, but stops checking when they log out

Real-time Data Dashboard
A monitoring dashboard that polls for system metrics until the user switches to a different view
*/