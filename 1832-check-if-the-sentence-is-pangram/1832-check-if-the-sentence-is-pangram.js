/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let value=""

    for (let i=0; i<sentence.length;i++){
        if(!value.includes(sentence[i])){
            value+=sentence[i]
        }
    }

    if(value.length==26){
        return true
    }else{
        return false
    }

};