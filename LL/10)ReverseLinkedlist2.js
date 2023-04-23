// LEET CODE = 92

function reverse(head,left,right){
if(head == null || head.next == null ){
    return head
  }
  if(left == right){
      return head
  }
  
      let temp = head;
  
      for(let i = 1 ;i < left; i++){
          temp=temp.next
      } 
  let curr = temp;
  let diff = right - left;
  for (let i = 0; i < diff ; i++){
      curr = curr.next
  }
  let remain = curr.next;
  curr.next = null
  
  let reversedNumbers = f(temp)
  if(left > 1){
  let hello = head;
  for(let i = 1; i <= left-2 ;i++){
      hello = hello.next
  }
  hello.next = reversedNumbers}
  if(left == 1){
      head = reversedNumbers
  }
  let temp2 = head
  while(temp2.next != null){
      temp2 = temp2.next
  }
  temp.next = remain
  return head
  }
  
  function f(curr){
      if(curr.next==null){
          return curr
      }
     let d=curr
      let newhead=f(curr.next)
    let c=curr                             // 1,2,3,4,5
  curr.next.next=curr
  
  curr.next=null
  return newhead 
  }