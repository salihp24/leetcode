/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let nums1=0
    let nums2=0
    for(let i=1; i<=n; i++){
        if(i%m==0){
            nums1+=i
        }else{
            nums2+=i
        }
    }
    return nums2-nums1
};