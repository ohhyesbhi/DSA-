let root = { data : 1 , left : {
  data : 2 , left :
  { data :4, 
    left : null,right : null},
     right : { data: 6,left : null , right : null }
},

right : { data : 3 , left:{data:5,left:null,right:null}, right:{
  data:7,left:null,right:null
}}}

let mp;
 let mincol ;
 let maxcol ;
let result = [];

console.log(hey(root))

function hey(root){
  mp = {}
  mincol = 0
  maxcol = 0
   f(root,0)
    for(let i = mincol ; i <= maxcol ; i++){
       result.push(mp[i])
   }
   return result
}
function f(r , col){
  result = []
  if(r==null){
  return  
   }

   if(mp[col]){
       mp[col].push(r.data)
   }else{
       mp[col] = [r.data]
   }
mincol = Math.min(mincol , col)
maxcol = Math.max(maxcol , col)
   f(r.left, col-1)
   f(r.right, col+1)
 return result
}
