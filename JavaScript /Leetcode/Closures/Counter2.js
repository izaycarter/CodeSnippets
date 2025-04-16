/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

var createCounter = function(init) {
    let currentValue = init;
    
    return {
      increment() {
        currentValue += 1;
        return currentValue;
      },
      decrement() {
        currentValue -= 1;
        return currentValue;
      },
      reset() {
        currentValue = init;
        return currentValue;
      }
    };

    // Alternative solution using arrow functions
    // return {
    //   increment: () => ++currentValue,
    //   decrement: () => --currentValue,
    //   reset: () => (currentValue = init)
    // };

    // Alternative solution using closures
    // return {
    //   increment: function() {
    //     currentValue++;
    //     return currentValue;
    //   },
    //   decrement: function() {
    //     currentValue--;
    //     return currentValue;
    //   },
    //   reset: function() {
    //     currentValue = init;
    //     return currentValue;
    //   }
    // };

    // Alternative solution using a class
    // class Counter {
    //   constructor(init) {
    //     this.currentValue = init;
    //   }
    //   increment() {
    //     this.currentValue++;
    //     return this.currentValue;
    //   }
    //   decrement() {
    //     this.currentValue--;
    //     return this.currentValue;
    //   }
    //   reset() {
    //     this.currentValue = init;
    //     return this.currentValue;
    //   }
    // }
    // return new Counter(init);

    // Alternative solution using a generator function
    // function* counterGenerator(init) {
    //   let currentValue = init;
    //   while (true) {
    //     yield currentValue++;
    //   }
    // }
    // const counter = counterGenerator(init);
    // return {
    //   increment: () => counter.next().value,
    //   decrement: () => --counter.next().value,
    //   reset: () => (counter.next().value = init)
    // };

    // Alternative solution using a proxy
    // const counter = {
    //   currentValue: init,
    // };
    // return new Proxy(counter, {
    //   get(target, prop) {
    //     if (prop === 'increment') {
    //       target.currentValue++;
    //       return target.currentValue;
    //     } else if (prop === 'decrement') {
    //       target.currentValue--;
    //       return target.currentValue;
    //     } else if (prop === 'reset') {
    //       target.currentValue = init;
    //       return target.currentValue;
    //     }
    //     return target[prop];
    //   }
    // });

    // Alternative solution using a Map
    // const counter = new Map();
    // counter.set('currentValue', init);
    // return {
    //   increment: () => counter.set('currentValue', counter.get('currentValue') + 1),
    //   decrement: () => counter.set('currentValue', counter.get('currentValue') - 1),
    //   reset: () => counter.set('currentValue', init),
    //   getValue: () => counter.get('currentValue')
    // };
};
