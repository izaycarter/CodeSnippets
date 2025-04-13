/*
Given an array of integers nums and an integer target, 
return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first
*/

function twoSum(nums, target) {
    // Create a map to store values we've seen and their indices
    const map = new Map();
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement we need to find
        const complement = target - nums[i];

        // If we've seen the complement before, we found our pair
        if (map.has(complement)) {
        return [map.get(complement), i];
        }
        // Otherwise, store the current number and its index
        map.set(nums[i], i);
    }
    // If no solution is found
    return [];
}