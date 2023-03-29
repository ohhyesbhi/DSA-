// LEET CODE = 1047;
let s = "abbaca"

console.log(f(s))

function f(s){
s = s.split("")
let stack = []
stack[0] = s[0]

for(let i = 1 ; i < s.length; i++){

    if(stack[stack.length-1] == s[i]){
stack.pop()
}

else{
stack.push(s[i])
}
}
let newStr = ""    
for(let i = 0; i < stack.length ; i++){
newStr = newStr + stack[i]
}
return newStr
}