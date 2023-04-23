let head=null;

head=addhead(head,5);
head=addhead(head,4);
head=addhead(head,3);
head=addhead(head,2);         
head=addhead(head,1);

head=reverse(head)
display(head)
function reverse(curr){
    if(curr.next==null){
        return curr
    }
   let d=curr
    let newhead=reverse(curr.next)
  let c=curr                             // 1,2,3,4,5
curr.next.next=curr

curr.next=null
return newhead
}

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
    head=newnode;
    return head
}
function createnode(data){
    return{data:data,next:null
    }
}