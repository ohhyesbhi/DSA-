// LEET CODE = 496

let nums1 = [4,1,2]
let nums2 = [1,3,4,2]

console.log(nge(nums1,nums2))

function nge(nums1,nums2){
let op = Array(nums1.length).fill(-1)

for(let i = 0 ; i < nums1.length ; i++ ){
let st = []

for(let j=0;j<nums2.length;j++){
if(nums1[i] == nums2[j]){
st.push(j)
for(let q = j+1 ;q < nums2.length ;q++ ){
    while(nums2[q] > nums2[st[st.length-1]] && st.length>0 ){
        op[i] = nums2[q]
        st.pop()
    }}
}
}
}
return op
}