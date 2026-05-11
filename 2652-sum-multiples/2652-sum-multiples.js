/**
 * @param {number} n
 * @return {number}
 */
// var sumOfMultiples = function(n) {
//     let result=0
//     for (let i=1; i<=n; i++){
//         if(i%3==0 || i%5==0 || i%7==0){
//             result+=i
//         }
//     }

//     return result
// };

var sumOfMultiples = function(n) {
    return Array.from({length:n},(_,i)=>i+1)
    .filter(v=>v%3==0 || v%5==0 || v%7==0)
    .reduce((acc,val)=>acc+val,0)
};