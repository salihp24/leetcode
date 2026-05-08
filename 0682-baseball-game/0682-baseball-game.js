/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(ops) {
    let record=[]

    for(let i=0;i<ops.length; i++){
        if(ops[i]!=="D" && ops[i]!=="C" && ops[i]!=="+"){
            record.push(Number(ops[i]))
        }else if(ops[i]=="D"){
            record.push(record[record.length-1]*2)

        }else if(ops[i]=="C"){
            record.pop()
        }else if(ops[i]=="+"){
            let last=record[record.length-1]
            let beforeLast=record[record.length-2]
            
            record.push(last+beforeLast)
        }
    }

    return record.reduce((acc,val)=>acc+val,0)

};


// var calPoints = function(ops) {
//     let record=[]

//     for(let i=0;i<ops.length; i++){
//         switch(ops[i]){
//             case "D":{
//                 record.push(record[record.length-1]*2)
//                 break;
//             }
//             case "C":{
//                 record.pop()
//                 break;
//             }
//             case "+":{
//                 let prev=record[record.length-1]
//                 let beforePrev=record[record.length-2]
                
//                 record.push(prev+beforePrev)
                
//                 break;
//             }
//             default:{
//                 record.push(Number(ops[i]))
//             }
//         }
//     }

//     return record.reduce((acc,val)=>acc+val,0)

// };