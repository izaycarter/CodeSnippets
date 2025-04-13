/* 
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.
*/

function productExceptSelf(nums) {
    const n = nums.length;
    const output = new Array(n).fill(1);
    
    // First pass: calculate products of all elements to the left
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
    }
    
    // Second pass: multiply by products of all elements to the right
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return output;
}