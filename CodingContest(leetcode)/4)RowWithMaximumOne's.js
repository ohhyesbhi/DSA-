// LEET CODE = 2643

let mat = [[0,0],[1,1],[0,0]]
console.log(rowAndMaximumOnes(mat))

function rowAndMaximumOnes(mat) {
    
    let max = 0
    let result = []
    let b = Array(2).fill(0)
    result.push(b)

    for(let i = 0 ; i < mat.length ;i++){
        let count = 0
        for(let j = 0 ; j < mat[i].length ; j++){
            if(mat[i][j] == 1){
                count++
            }
        }
        
        if(max < count){
            result[0][0] = i
            result[0][1] = count
        max  = count

        }
       
    }
   return result[0]
  
};