// LEET CODE = 2645
let word = "aaa"
console.log(addMinimum(word))

function addMinimum(word) {
let ans = 0
let start = 0
let nextchar = "a"

while(start < word.length){
if(nextchar == word[start]){
    if(nextchar == "a"){
   nextchar = "b"
    }
    else if(nextchar == "b"){
        nextchar = "c"
    }else{
        nextchar = "a"
    }
    start++
}else{
    ans++
    if(nextchar == "a"){
        nextchar = "b"
         }
         else if(nextchar == "b"){
             nextchar = "c"
         }else{
             nextchar = "a"
         }

}}
if(nextchar == "b" || nextchar =="c"){
  if(nextchar == "b"){
    ans +=2
  }else{
    ans+=1
  }
}
return ans
}