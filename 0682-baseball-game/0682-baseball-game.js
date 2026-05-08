/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(ops) {
    let record=[]
    let result=0

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

    return result=record.reduce((acc,val)=>acc+val,0)

};