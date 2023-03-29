let arr=[100,80,60,70,60,75,85];
arr.reverse()
console.log(f(arr))

function f(arr){
    let stack=[]
    stack.push(0)
let op=Array(arr.length).fill(-1)

    for(let i=1;i<arr.length;i++){
     
        while(arr[i]>=arr[stack[stack.length-1]]&&stack.length>0){
        op[stack[stack.length-1]]=i
        stack.pop()
        }
        stack.push(i)
}
return op.reverse() 
}