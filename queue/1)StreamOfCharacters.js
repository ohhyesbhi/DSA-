// INTERVIEW BIT = First non-repeating character in a stream of characters

class queue{
    constructor(){
        this.stack = []
    }
    
    enqueue(x){
        this.stack.push(x)
    }
    
    dequeue(){
          if(this.stack.length==0){
            return false
          }
    
        let temp = []
        while(this.stack.length>0){
            let addToTemp = this.stack.pop(this.stack[this.stack.length-1])
            temp.push(addToTemp)
        }
        temp.pop(temp.length-1)
        while(temp.length != 0){
            let addToStack = temp.pop()
            this.stack.push(addToStack)
        }
    }
    
    getFront(){
    return this.stack[0]
    }
    }
  
    let str = "abcaabddcfc"
    console.log(hey(str))
  
    function hey(str){
      let b = ""
      let freq = {}
      let qu = new queue()
  
      for(let i = 0; i < str.length ; i++){
        let currChar = str[i];
  
        if(!freq[currChar]){
          freq[currChar] = 1
        }else{
          freq[currChar]++
        }
  
        if(freq[currChar] == 1){
          qu.enqueue(currChar)
        }
        let front = qu.getFront()
        while(freq[front]!=1){
         var c= qu.dequeue();
          front = qu.getFront();
          if(c == false){
            break;
          }
        }
        if (front == undefined){
          b +="#"
        }else{
          b += qu.getFront()
        }
      }
      console.log(b)
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  