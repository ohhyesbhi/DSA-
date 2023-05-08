let str = "-9+*531"
let stack = []
// just start the iteration from the last
for(let i = str.length - 1 ; i >= 0 ; i--){
  if(str[i] == "*" || str[i] == "+" || str[i] == "-" || str[i] == "/"){
    if(str[i] == "*"){
      let result = stack[stack.length - 1] * stack[stack.length -2]
      stack.pop()
      stack.pop()
      stack.push(result)
    }
    else if(str[i] == "+"){
      let result = stack[stack.length - 1] + stack[stack.length -2]
      stack.pop()
      stack.pop()
      stack.push(result)
    }
    else if(str[i] == "-"){
      let result = stack[stack.length - 2] - stack[stack.length - 1]
      stack.pop()
      stack.pop()
      stack.push(result)
    }
    else if(str[i] == "/"){
      let result = stack[stack.length - 1] / stack[stack.length -2]
      stack.pop()
      stack.pop()
      stack.push(result)
    }
  }else{
    stack.push(+str[i])
  }
}
console.log(stack[stack.length-1])