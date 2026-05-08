/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let result=new Set
    for(let i=0;i<nums.length; i++){
        result.add(nums[i])
    }
    
    return result.size !== nums.length
    
};

// var containsDuplicate = function(nums) {
//     let result=[]
//     for (let i=0;i<nums.length; i++){
//         if(!result.includes(nums[i])){
//             result.push(nums[i])
//         }
//     }

//     if(result.length!==nums.length){
//         return true
//     }else{
//         return false
//     }
    
// };