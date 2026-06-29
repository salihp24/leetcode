/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let arr=[]
    for(let num of nums){
        let str=String(num)
        let x=str.split("")
        for(let i=0; i<x.length; i++){
            let a=Number(x[i])

            arr.push(a)
        }
    }
    return arr
};