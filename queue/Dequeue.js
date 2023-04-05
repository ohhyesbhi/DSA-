//THE MAJOR DIFFERENCE BETWEEN QUEUE AND DEQUEUE IS IN DEQUEUE WE CAN ADD ELEMENT AT FRONT AND REMOVE A ELEMENT AT FRONT AND SAME THING HOLDS FOR BACK TOO

function createnewnode(value){
    return {
        data:value,next:null,prev:null
    }
}

class dequeue{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    insertAtHead(data){
        let newnode = createnewnode(data)
        if(this.head == null){
            this.head = newnode;
            this.tail = newnode;
        }else{
            newnode.next = this.head;
            this.head.prev = newnode;
            this.head = newnode;
        }
    }

    insertAtTail(data){
        if(this.tail == null){
            this.insertAtHead(data);
        }
        let newnode = createnewnode(data);
        this.tail.next = newnode;
        newnode.prev = this.tail;
        this.tail = newnode;

    }

    DeleteAtHead(){
        if(this.head == null){
            console.log("cannot delete empty linked list");
            return
        }
        if(this.head.next == null){
            this.head = null;
           this.tail = null;
        }
        let newhead = this.head.next;
        this.head.next = null;
        newhead.prev = null;
        this.head=newhead
    }

    DeleteAtTail(){
        if(this.head == null){
            console.log("empty LL");
            return
        }

        if(this.head.next == null){
            this.head = null;
            this.tail = null;
            return
        }   
        
        let newtail = this.tail.prev;
        newtail.next = null;
        this.tail.prev = null;
        this.tail = newtail;
    }

    getTail(){
        if(this.head == null){
            console.log("this is empty LL")
            return
        }
        return this.tail.data
    }

    getHead(){
        if(this.head == null){
            console.log("this is empty LL")
        return
        }
        return this.head.data
    }    
}

let dqu = new dequeue();
dqu.insertAtHead(10);
dqu.insertAtHead(20);
dqu.insertAtHead(30);
dqu.insertAtHead(40);

console.log( dqu.getHead() , dqu.getTail() );

dqu.DeleteAtTail();

console.log( dqu.getHead() , dqu.getTail() );

dqu.DeleteAtHead();

console.log( dqu.getHead() , dqu.getTail() );

