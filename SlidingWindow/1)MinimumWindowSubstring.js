//LEET CODE = 76

let s = "ADOBECODEBANC"
let t = "ABC"
console.log(minWindow(s,t))

function minWindow(s,t){
if(s.length < t.length){
    return ""
}
let ms = {}
let mt = {}
for(let i = 0 ; i < t.length ;i++){
    let curr = t[i]
    if(mt[curr]){
        mt[curr]++
    }else{
        mt[curr] = 1
    }
}

let length = 0
let ans = Infinity;
let ans_idx= -1
let start = 0
let end = 0

while(end < s.length){

    if(!ms[s[end]]){
        ms[s[end]] = 1
    }else{
        ms[s[end]]++
    }

    if(ms[s[end]] <= mt[s[end]]){
        length++
    }

    if(length == t.length){
        while(!mt[s[start]] || ms[s[start]] > mt[s[start]]){
            ms[s[start]]--
             start++
        }

        if(end - start + 1 < ans){
            ans = end - start + 1
            ans_idx = start
        }
    }
    end++
}

if(ans_idx == -1){
   return ""
}
let result = ""

for(let i = 0 ; i < ans ; i++){
   result += s[ans_idx + i]
}

return result



};