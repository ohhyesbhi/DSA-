// LEET CODE = 567

let s1 = "ab"
let s2 = "eidbaooo"
console.log(checkInclusion(s1,s2))

function checkInclusion(s1,s2){
let freq = {}
for(let i = 0 ; i < s1.length ;i++){
    let curr = s1[i]
    if(freq[curr]){
        freq[curr]++
    }else{
        freq[curr] = 1
    }
}

let freq1 = {}
let start = 0
let end = 0
let length = 0
while(end < s2.length){
let curr = s2[end]

if(!freq1[curr]){
    freq1[curr] = 1
}else{
    freq1[curr]++
}
if(freq1[curr] <= freq[curr]){
    length++
}
if(length == s1.length){
    while(!freq[s2[start]] || freq1[s2[start]] > freq[s2[start]]){
        freq1[s2[start]]--
        start++
    }
    let ans = end - start + 1
    if(ans == s1.length){
        return true
    }
}
end++
}

return false
}