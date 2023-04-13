// LEET CODE = 128

let nums = [0,3,7,2,5,8,4,6,0,1]
console.log(longestConsecutive(nums))

function longestConsecutive(a){

let freq={};
for(let i=0;i<a.length;i++){
    let curr=a[i];
    if(freq[curr]){
        freq[curr]++
    }
    else{
        freq[curr]=1
    }}
let maxlength=0;
for(let i=0;i<a.length;i++){
    let curr=1;
    let curr1=a[i]+1;
     if(freq[curr1]==-Infinity){
continue
    }
while(freq[curr1]){
    freq[curr1]=-Infinity
curr++
curr1=curr1+1
}
maxlength=Math.max(maxlength,curr)
}
return maxlength
}