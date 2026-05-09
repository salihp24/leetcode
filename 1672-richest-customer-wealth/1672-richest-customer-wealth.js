/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(acc) {
    let max=0
    for(let i=0;i<acc.length;i++){
        let wealth=0
        for(let j=0; j<acc[i].length;j++){
            wealth+=acc[i][j]

            if(wealth>max){
                max=wealth
            }
        }
    }
    return max
};