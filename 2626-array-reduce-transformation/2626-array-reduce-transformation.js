/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let reduced=init
    for(let i=0; i<nums.length;i++){
        reduced=fn(reduced,nums[i])
    }
    return reduced
};