// LEET CODE = 678

let s = "(*))"

console.log(validParenthesses(s))

function validParenthesses(s){
let openBracket = []
let star = []

for(let i = 0; i < s.length ; i++ ){
    if(s[i] == "("){
        openBracket.push(i)
    }
    else if(s[i] == "*"){
        star.push(i)
    }else if(s[i] == ")"){
        if(openBracket[openBracket.length-1] < i){
            openBracket.pop()
        }
        else if(star[star.length - 1] < i){
            star.pop()
        }else{
          return false
        }
    }}

if(openBracket.length == 0){
    return true
}
else if(star.length == 0 || openBracket.length > star.length){
    return false
}
else{
          // To balance the left one openBrackets with Stars
for(let i = 0 ; i < openBracket.length; i++){
    while(openBracket[openBracket.length-1] < star[star.length - 1]){
        openBracket.pop()
        star.pop()
    }
}
if(openBracket.length == 0 ){
return true
}
return false

}
}