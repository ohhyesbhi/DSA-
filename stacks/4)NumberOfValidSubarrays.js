let arr=[1,4,2,5,3]
console.log(f(arr))

function f(arr){
    let stack=[]
    stack.push(0)
let op=Array(arr.length).fill(-1)

    for(let i=1;i<arr.length;i++){
     
        while(arr[i]<arr[stack[stack.length-1]]&&stack.length>0){
        op[stack[stack.length-1]]=i
        stack.pop()
        }
        stack.push(i)

    }
    let ans=0
    for(let i=0;i<arr.length;i++){
        if(op[i]==-1){
        ans=ans+(op.length-i)
        }
        else{
            ans=ans+(Math.abs(op[i]-i))
        }
    }
return ans
}