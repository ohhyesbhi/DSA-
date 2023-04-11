// LEET CODE = 331

let preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"
console.log(isValidSerialization(preorder))

function isValidSerialization(preorder){
let value = 1;
preorder = preorder.split(",")
   for(let i = 0 ; i < preorder.length ;i++){
    value = value - 1
    if(value<0){
      return false
    }
    if(preorder[i] != "#"){
      value = value + 2
    }
   }
 if(value == 0){
   return true
 }
 return false
};