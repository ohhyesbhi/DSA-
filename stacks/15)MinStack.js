// LEET CODE = 115

class minstack{
    constructor(){
        this.min = Infinity
        this.stack = []
    }

    push(x){
        if(this.stack.length == 0){
            this.stack.push(x)
            this.min = x
        }else{
            this.stack.push(x-this.min)
            if(this.min > x){
                this.min = x
            }
        }
    }

    pop(){
        if(this.stack.length != 0){
            if(this.stack[this.stack.length - 1] >= 0){
                this.stack.pop()
            }else{
                this.min = this.min - this.stack[this.stack.length-1]
                this.stack.pop()
            }
        }
    }
    top(){
        if(this.stack.length == 1){
          return this.stack[this.stack.length - 1]
        }else if(this.stack[this.stack.length - 1] < 0){
            return this.min
        }else{
            return this.min + this.stack[this.stack.length - 1]
        }
    }

    minEle(){
        return this.min
    }
}

let mn = new minstack()
mn.push(10)
mn.push(5)
mn.push(6)
mn.push(12)
mn.push(-1)
mn.push(-5)

console.log(mn.top())
console.log(mn.minEle())