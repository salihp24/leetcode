/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const k=[...new Set(nums)]

    for(let i=0;i<k.length;i++){
        nums[i]=k[i]
    }
    return k.length
    

};