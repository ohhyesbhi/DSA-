// LEET CODE = 735

let asteroids = [5,10,-5]
console.log(AsteroidsCollision(asteroids))

function AsteroidsCollision(nums){
let stack = []
stack.push(-Infinity)

for(let i = 0 ; i < nums.length ; i++){
    if(stack[stack.length-1] > 0 && nums[i] < 0){
let a = Math.abs(nums[i])
let count = 0
        while( a >= stack[stack.length-1] && stack[stack.length-1]>=0 && stack.length > 0){
            if(a==stack[stack.length-1]){
             count++
                stack.pop()
                break
            }
            stack.pop()
            
        }
        if(stack[stack.length-1] < 0 && count == 0 || stack[stack.length] == -Infinity){
        stack.push(nums[i])}
    }
    else{
        stack.push(nums[i])
    }
}
stack.shift()
return stack
}