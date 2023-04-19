let arr = [4,5,3,2,1]
QuickSort(arr)
console.log(arr)

function QuickSort(arr){
    f(arr,0,arr.length-1)
}

function f(arr,l,r){
    if(l >= r){
        return
    }
let pivotindex = PickRandomIndex(l,r)
let m = sort(arr,pivotindex,l,r)
      f(arr,l,m-1)
      f(arr,m+1,r)
 return arr
}

function PickRandomIndex(l,r){
    return Math.floor(Math.random()*(r-1)+l)
}

function sort(arr,pivotIndex,l,r){
    let pivotelement = arr[pivotIndex]
    
   swap(arr,pivotIndex,r) 
   let i = l - 1
   let j = l
   while(j < r){
    if(arr[j] <= pivotelement){
        i++
        swap(arr,i,j)
    }
    j++
   }
   swap(arr,i+1,r)
   return i+1
}

function swap(arr,pivotindex,R){
    let temp = arr[pivotindex]
    arr[pivotindex] = arr[R]
    arr[R] = temp
}