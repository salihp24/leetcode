/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length; i++){
        for(let a=i+1; a<nums.length; a++){
            if(nums[i]+nums[a]==target){
                return [i,a]
            }
        }
    }
};