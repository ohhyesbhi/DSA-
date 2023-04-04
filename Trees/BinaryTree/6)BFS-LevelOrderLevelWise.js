// LEET CODE = 102

function createNode(value) {
    return {
      data: value,
      next: null,
    };
  }
  
  class CustomQueue {
    constructor() {
      this.head = null; // front
      this.tail = null; // back
    }
    enqueue(x) {
      let newNode = createNode(x);
      //add at tail
      if (this.tail == null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    dequeue() {
      if (this.head == null) return;
      let nextNode = this.head.next;
      this.head.next = null;
      this.head = nextNode;
      if (this.head == null) {
        this.tail = null;
      }
    }
  
    getFront() {
      if (this.head == null) return;
      return this.head.data;
    }
  
    getback() {
      if (this.tail == null) return;
      return this.tail.data;
    }
  
    empty() {
      return this.head == null;
    }
  }
  
  function BFS(root) {
      if(root == null){
          return []
      }
    let qu = new CustomQueue()
    qu.enqueue(root);
    qu.enqueue(null);
    let result = [];
    let temp = [];
  
  while(true){
      let front = qu.getFront()
      qu.dequeue()
      if(front == null){
    
      if(qu.empty()){
      break;
       }
  
      qu.enqueue(null)
      result.push(temp)
      temp = []
      continue
      }
      temp.push(front.val);
  
      if(front.left){
          qu.enqueue(front.left)
      }
      if(front.right){
          qu.enqueue(front.right)
      }
  }result.push(temp)
  return result
  };