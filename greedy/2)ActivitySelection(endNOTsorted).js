let start = [0,1,3,5,8,8];
let end = [6,2,4,7,9,9];

console.log(ActivityPerformed(start,end))

function ActivityPerformed(start,end){

let newStart = []

for(let i = 0 ; i < start.length ; i++){
    let q = Array(3).fill(0)
    newStart.push(q)
    newStart[i][0] = i
    newStart[i][1] = start[i];
    newStart[i][2] = end[i]
}

// NOW SORT BASED ON ENDING TIME

newStart.sort(fn)
function fn(x,y){
    return x[2] - y[2];
}

let endTime = newStart[0][2]
let count = 1
for(let i = 1 ; i < newStart.length ;i++)
{
    if(newStart[i][1] > endTime){
        count++;
        endTime = newStart[i][2]
    }
}
return count
}