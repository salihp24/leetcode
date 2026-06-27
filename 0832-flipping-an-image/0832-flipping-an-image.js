/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    let flipped=[]

    for(let im of image){
        for(let i=0; i<im.length; i++){
            if(im[i]==1){
                im[i]=0
            }else{
                im[i]=1
            }
        }
        flipped.push(im.reverse())        
    }
    return flipped
};