// LEET CODE = 150


let tokens = ["4","13","5","/","+"]
console.log(evalRPN(tokens))

function evalRPN(tokens){
let stack = []
let sum = 0

for(let i = 0 ; i < tokens.length ; i++){
   
    if(tokens[i] == "+" || tokens[i] == "*" || tokens[i] == "/" || tokens[i] == "-"){
    
        if(tokens[i] == "+"){
      sum = (+stack[stack.length-1])+(+stack[stack.length-2]) 
      stack.pop()
      stack.pop()
stack.push(sum)
    }
     if(tokens[i] == "*"){
        sum =  (+stack[stack.length-1])*(+stack[stack.length-2])
        stack.pop()
        stack.pop()
        stack.push(sum) 
     }
     if(tokens[i] == "/"){
        stack[stack.length-2] = +stack[stack.length-2]     // these both values were in string so converted to number
        stack[stack.length - 1] = +stack[stack.length - 1]
       
        sum = stack[stack.length-2]/ stack[stack.length - 1]
        sum = Math.trunc(sum)
        stack.pop()
        stack.pop()
        stack.push(sum)
     }
     if(tokens[i] == "*"){
        stack[stack.length-2] = +stack[stack.length-2]     // these both values were in string so converted to number
        stack[stack.length - 1] = +stack[stack.length - 1]
        sum = stack[stack.length-2]*stack[stack.length - 1]
        stack.pop()
        stack.pop()
        stack.push(sum)
     }

    }else{
        stack.push(tokens[i])
    }
}
return sum}

