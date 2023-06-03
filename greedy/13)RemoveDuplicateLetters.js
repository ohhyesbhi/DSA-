// LEET CODE = 316
let s = "cbacdcbc"
console.log(removeDuplicateLetters(s))

function removeDuplicateLetters(s){
let freq = {}
for(let i = 0 ; i < s.length ; i++){
    let curr = s[i]
    if(freq[curr]){
        freq[curr]++
    }else{
        freq[curr] = 1
    }
}

let ans = []
ans[0] = s[0]
freq[ans[0]]-=1
let p = 0
let freq2 = {}

for(let i = 1 ; i < s.length ; i++){      //"acbac"
    let a = ans[ans.length-1].charCodeAt();
    let b = s[i].charCodeAt();
    if(a==b){
        freq[s[i]]-=1
       continue
    }
   else if(b<=a){
   
        while(freq[ans[ans.length-1]]>=1 && !freq2[s[i]] && b<=a)
        {
        let c = ans.pop()
        freq2[c]  = 0   
       if(ans.length != 0){
        a = ans[ans.length-1].charCodeAt();
        b = s[i].charCodeAt();
    }}

    if(!freq2[s[i]]){
        ans.push(s[i]) 
       }
    }
    else{
        let a = s[i]
        if(!freq2[s[i]])
        {
            freq2[ans[ans.length-1]] = 1
       ans.push(s[i])
       freq2[ans[ans.length-1]] = 1

    }
    }
    freq[s[i]] -= 1    
}
return (ans.join(""))
}