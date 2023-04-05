function createnewnode(value){
    return {
        data:value,next:null
    }
}

class queue{
    constructor(){
      this.head = null //front
      this.tail = null //back
    }

    enqueue(x){      //add at tail
        let newnode=createnewnode(x)
           if(this.head == null){
            this.head = newnode
            this.tail = newnode
           }
           else{
            this.tail.next = newnode;
       this.tail=newnode
           }
    }

    dequeue(){
        if(this.head == null){
            return
        }

        let nextnode = this.head.next
        this.head.next = null ;
        this.head = nextnode
        if(this.head == null){
            this.tail = null;
        }
    }

    getfront(){
        if(this.head == null){
            return
        }
        return this.head.data
    }

    getback(){
        if(this.head == null){
            return 
        }
        return this.tail.data;
    }

    empty(){
        return this.head == null
    }
}

let qu = new queue();
qu.enqueue(10)
qu.enqueue(20)
qu.enqueue(30)
qu.enqueue(40)
qu.enqueue(50)
console.log(qu.getfront(),qu.getback())
qu.dequeue()
qu.dequeue()
console.log(qu.getfront(),qu.getback())