// what is linked list???
/* *generally linked lists are linear data structure simple objects thats get created at random available memory location or else we can say that they are non-contigious*/
// DISADVANTAGE - In array we can access the mid elements which takes time complexity of O(1) but in linked lists we don't have an direct access so to acces the it takes O(N) 
let head=null
head=addhead(head,1)
head=addhead(head,2)
head=addhead(head,3)
head=addhead(head,4)
head=addhead(head,5)

head=RemoveAtHead(head)
head=RemoveAtTail(head)

head=AddAtTail(head,6);

function AddAtTail(head,data){
    if(head==null){
        return createnode(head,data)
    }
    let temp=head;
    while(temp.next!=null){
        temp=temp.next
    }
    let newnode=createnode(data);
    temp.next=newnode
    return head
}

function RemoveAtTail(head){
    if(head.next==null){
         return null       //for single head
    }
    let temp=head;
    while(temp.next.next!=null){
        temp=temp.next
    }
temp.next=null
return head
}


function RemoveAtHead(head){
    if(head==null){
        return null
    }
    let temp=head.next;
    head.next=null //breaking the connection
    head=temp       
    return head
}
function addhead(head,data){
    let newnode=createnode(data)
    newnode.next=head;
    head=newnode
    return head
}

function createnode(value){
    return {
        data:value,
        next:null
    }
}
display(head);
function display(head){
    let temp=head;
    while(temp!=null){
        console.log(temp.data)
        temp=temp.next
    }
}