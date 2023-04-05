
class stacks{

constructor(){
    this.q = []
    this.q1 = []
    this.front = 0
}    

Push(x){
    while(this.q.length != 0){
this.q1.push(this.q[this.q.length-1])
this.q.pop()
    }
    this.q.push(x)

    while(this.q1.length != 0){
        this.q.push(this.q1[this.q1.length - 1])
        this.q1.pop();
    }
}

pop(){
let val = this.q[this.q.length - 1]
this.q.shift()
return val
}

top(){
    return this.q[this.front]
}
}

let qu = new stacks()
qu.Push(10)
qu.Push(20)
qu.Push(30)
qu.Push(40)
qu.pop()
console.log(qu.top())