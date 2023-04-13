// LEET CODE = 3

let s = "pwwkew"
console.log(lengthOfLongestSubstring(s))

function lengthOfLongestSubstring(a){
let freq={};

let start=0;
let end=0;
let max=0;
let count=0
while (end<a.length){
let curr=a[end];
let curr1=a[start];

if(!freq[curr]){
    freq[curr]=1;
    end++;
    count++;
    max=Math.max(max,count)

}
else{
    count--
    delete freq[curr1];
    start++
}
}
return max
}