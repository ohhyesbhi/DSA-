let points = [[1,1],[1,3],[1,4],[1,5],[3,1],[3,3],[4,1],[5,2]]

console.log(f(points))

function f(points){
let freq = {}
let freq1 = {}

for(let i = 0 ; i < points.length ;i++){
    let curr = points[i][0]
    if(freq[curr]){
        freq[curr]++
    }else{
        freq[curr] = 1
    }
}

for(let i = 0 ; i < points.length ;i++){
    let curr = points[i][1]
    if(freq1[curr]){
        freq1[curr]++
    }else{
        freq1[curr] = 1
    }
}
let ans = 0

for(let i = 0 ; i < points.length ;i++){
    let a = freq[points[i][0]]
    let b = freq1[points[i][1]]
    ans += (a-1) * (b-1)

}
return ans
}