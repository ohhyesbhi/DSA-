let stack=[1,2,3,4];
//suppose we are adding element 5 at bottom of stack and o/p should be [5,1,2,3,4]

console.log(addAtBottom(stack,5))

function addAtBottom(stack,x){
    const temp=[]
   
    while(stack.length!=0){
       let b=stack.pop() //empty the stack
       temp.push(b)  //make a copy of stack 
    }
   
    stack.push(x)  //once the stack is empty push the element
   
    while(temp.length!=0){
       let x=temp.pop() //empty the temp by pushing elements into stack
       stack.push(x)
    }
    return stack
}