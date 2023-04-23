//Here let's do adding the elements at it given index and removing the elements at the given index
let head=null
head=addhead(head,1)
head=addhead(head,2)
head=addhead(head,3)
head=addhead(head,4)
head=addhead(head,5)

head=AddatIndex(head,99,2)
head=RemoveAtIndex(head,2)

function RemoveAtIndex(head,i){
    let temp=head;
    let count=0;
    while(count<i-1){
        temp=temp.next
        count++
    }
    let prev1=temp
    let prev=temp.next.next;
    temp.next=null
    prev1.next=prev
    return head
    
}

function AddatIndex(head,data,i){
let count=0;
let temp=head
while(count<i-1){
    temp=temp.next
    count++
}
let prev=temp.next //storing the next elements
let newnode=createnode(data);
temp.next=newnode
newnode.next=prev
return head
}

display(head)
function display(head){
    let temp=head;
    while(temp!=null){
        console.log(temp.data)
        temp=temp.next
    }
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