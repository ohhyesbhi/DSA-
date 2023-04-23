let head = null

head = addAtHead(head,1)
head = addAtHead(head,2)
head = addAtHead(head,3)
head = addAtHead(head,4)
head = addAtHead(head,5)

head = RemoveAtHead(head)

head = AddAtTail(head,99)
head = AddAtTail(head,100)

head = RemoveTail(head)

display(head)

function createnode(value){
    return {data : value , next : null , prev : null}
}

function addAtHead(head,data){
    if(head == null){
        return createnode(data)
    }
    let newNode = createnode(data)
    newNode.next = head
    head.prev = newNode
    head = newNode
    return head
}

function RemoveAtHead(head){
    if(head == null){
        return null
    }
    if(head.next == null){
        return null
    }
    let newnode = head.next
    head.next = null
    newnode.prev = null
    head = newnode
    return head
}

function AddAtTail(head,data){
    let newnode = createnode(data)
    let temp = head
    while(temp.next != null){
        temp = temp.next
    }
    temp.next = newnode
    newnode.prev = temp
    return head
}

function RemoveTail(head){
    let temp = head
    while(temp.next.next != null){
        temp = temp.next
    }
    let tail = temp
    tail.prev = null
    temp.next = null
    return head
}

function display(head){
    let temp = head
    while(temp != null){
        console.log(temp.data)
        temp = temp.next
    }
}