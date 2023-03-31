// LEET CODE = 744;
 
function NextGreaterElement(letters,target){

let low = 0;
let high = letters.length - 1;
let target1 = target.charCodeAt();
let ans = 0

while(low <= high){
    let mid = Math.floor((low+high)/2);
    let Tocompare = letters[mid].charCodeAt()
    if(Tocompare > target1){
        ans = letters[mid];
        high = mid - 1
    }else{
        low = mid + 1;
    }
}

if(ans == 0){
    return letters[0]
}
return ans
}
