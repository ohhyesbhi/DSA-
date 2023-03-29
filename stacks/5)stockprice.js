
let price=[100,80,60,70,60,75,85]
price.reverse()
console.log(f(price))

function f(price){
    let stack=[]
    stack.push(0)
let op=Array(price.length).fill(1)

    for(let i=1;i<price.length;i++){
     
        while(price[i]>price[stack[stack.length-1]]&&stack.length>0){
        op[stack[stack.length-1]]=i-stack[stack.length-1]
        stack.pop()
        }
        stack.push(i)

    }
return op.reverse()
}
