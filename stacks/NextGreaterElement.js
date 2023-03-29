let arr=[2,5,6,3,9,12,20,13,7,1,8,16,19]
console.log(f(arr))

function f(arr){
    let stack=[]
    stack.push(0)
let op=Array(arr.length).fill(-1)

    for(let i=1;i<arr.length;i++){
     
        while(arr[i]>arr[stack[stack.length-1]]&&stack.length>0){
        op[stack[stack.length-1]]=arr[i]
        stack.pop()
        }
        stack.push(i)

    }
    return op
}
