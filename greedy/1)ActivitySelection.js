let start  = [1,3,0,5,8,5];
let end = [2,4,6,7,9,9];

console.log(ActivitiesPerformed(start,end))

function ActivitiesPerformed(start,end){
    let count = 1;
    let endTime = end[0]

    for(let i = 1 ; i < start.length ;i++){
        if(start[i] > endTime){
            count++;
            endTime = end[i]
        }
    }
    return count
}
