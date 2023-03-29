//LEET CODE = 907

let arr=[71,55,82,55]
console.log(f(arr))

function f(arr){
    let stack=[]
    stack.push(0)
let op=Array(arr.length).fill(-1)

    for(let i=1;i<arr.length;i++){
     
        while(arr[i]<=arr[stack[stack.length-1]]&&stack.length>0){
        op[stack[stack.length-1]]=i-stack[stack.length-1]
        stack.pop()
        }
        stack.push(i)

    }
    console.log(stack,"hi")
for(let i=0;i<op.length;i++){
    if(op[i]==-1){
        op[i]=op.length-i
    }
}
    arr.reverse();
    let stack1=[]
    stack1.push(0)
let op1=Array(arr.length).fill(-1)

    for(let i=1;i<arr.length;i++){

        while(arr[i]<arr[stack1[stack1.length-1]]&&stack1.length>0){
        op1[stack1[stack1.length-1]]=i-stack1[stack1.length-1]
        stack1.pop()
        }
        stack1.push(i)
}
console.log(stack1,"hello")
for(let i=0;i<op1.length;i++){
    if(op1[i]==-1){
        op1[i]=op1.length-i
    }
}
console.log(op)
op1.reverse() 
console.log(op1)

arr.reverse()
let result=0
for(let i=0;i<arr.length;i++){
result+=op[i]*op1[i]*arr[i]
}

return result


}