let str = "231*+9-"
let stack = []

for(let i = 0 ; i < str.length ; i++){
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