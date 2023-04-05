class node{
    constructor(d){
        this.data = d;
        this.next = null;
        this.prev = null
    }
}

class Dequeue{
    constructor(){
        this.head = null;
        this.tail = null
    }

    AddAtFront(x){
        if(this.head == null){
            this.head = this.tail = new node(x)
        }
        let newNode = new node(x);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode
    }

    AddAtBack(x){
        if(this.head == null){
            this.head = this.tail = new node(x)
        }

        let newNode = new node(x)
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
    }

    RemoveAtFront(){
        if(this.head == null){
            return
        }
        let n = this.head.next;
        this.head.next = null;

        if(n != null){
            this.head.prev = null;
        }
        this.head = n;
        if(this.head == null){
            this.tail = null
        }
    }

    RemoveAtBack(){
        if(this.head == null){
            return
        }
        let n = this.tail.prev
        this.tail.prev = null

        if(n != null){
            n.next = null
            this.tail = n
        }

        if(this.tail == null){
            this.head = null
        }
    }

    getFront(){
        if(this.head == null){
            return undefined
        }
        return this.head.data
    }

    getBack(){
        if(this.head == null){
            return undefined
        }

        return this.tail.data
    }

    empty(){
        return this.head == null
    }

    display(){
        let temp = this.head;
        let str = ""
        while(temp != null){
      str += temp.data + "---->"
      temp = temp.next
        }
        return str
    }
}

let dq = new Dequeue();
dq.AddAtBack(10)
dq.AddAtBack(20)
dq.AddAtBack(30)
dq.AddAtBack(40)
dq.AddAtFront(0)
dq.AddAtFront(100)

console.log(dq.display())