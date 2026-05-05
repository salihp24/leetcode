/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i=0; i<words.length; i++){
        let pal=words[i].split("").reverse().join("")

        if(pal==words[i]){
            return pal
        }
    }
    return ""
};