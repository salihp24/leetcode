/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let result={}
    for(let i=0; i<s.length; i++){
        if(!result[s[i]]){
            result[s[i]]=1
        }else{
            result[s[i]]=result[s[i]]+1
        }
    }

    for (let i=0; i<s.length; i++){
        if(result[s[i]]==1){
            return i
        }
    }
    return -1
};