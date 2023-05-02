// LEET CODE = 921

let  s = "())"
console.log(minAddToMakeValid(s))

function minAddToMakeValid(s){
let st = []

for(let i = 0 ; i < s.length ;i++){
    if(s[i] == "("){
        st.push(s[i])
    }
   else if(st[st.length - 1] == "(" && s[i] == ")"){
        st.pop()
    }
    else{
        st.push(s[i])
    }
}
return st.length
};