/* Time Complexity
Enqueue = O(1)
Dequeue = O(n) 
*/

class queue{
constructor(){
    this.input = []
    this.op = []
}

enqueue(x){
    this.input.push(x)
}

dequeue(){
      let val = this.getFront()
      this.op.pop();
      return this.val
}

getFront(){
if(this.op.length == 0){
    while(this.input.length != 0){
        this.op.push(this.input[this.input.length - 1])
         this.input.pop()
    }
}
return this.op[this.op.length - 1]
}
}

let qu = new queue()
qu.enqueue(10)
qu.enqueue(20)
qu.enqueue(30)
qu.enqueue(40)
console.log(qu.getFront())
qu.dequeue()
console.log(qu.getFront())
qu.dequeue()
console.log(qu.getFront())
qu.dequeue()
console.log(qu.getFront())
qu.dequeue()


