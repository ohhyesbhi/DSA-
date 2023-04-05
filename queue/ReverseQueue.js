let queue = [1,2,3,4]

console.log(ReverseQueue(queue))

function ReverseQueue(queue){
    let stack = [];
 while(queue.length != 0){
    stack.push(queue[queue.length - 1])
    queue.pop()
 }
 console.log(stack)
 while(stack.length!=0){
    queue.push(stack.shift())
    stack.pop()
 }
 return queue
}


