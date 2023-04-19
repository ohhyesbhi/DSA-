//LEET CODE = 215 
//Time Complexity = O(nlogK)

class MaxHeap{
    #arr;
    constructor(){
this.#arr = []
    }

    insert(data){
        this.#arr.push(data)
        this.upheapify(this.#arr.length-1)
    }
    
    upheapify(idx){
        while(idx > 0){
            let pi = Math.floor((idx-1)/2)
            if(this.#arr[idx] < this.#arr[pi]){
                this.swap(idx,pi)
            }else{
                break
            }
            idx = pi
        }
    }

    remove(){
        let temp = this.#arr[0]
        this.#arr[0] = this.#arr[this.#arr.length - 1]
        this.#arr[this.#arr.length - 1] = temp
        this.#arr.pop()
        this.downheapify(0)
    }

    downheapify(idx){
        while(idx < this.#arr.length-1){
            let left = 2*idx + 1
            let right = 2*idx + 2
            let result = idx
   if(left < this.#arr.length && this.#arr[left] < this.#arr[result]){
    result = left
   }
   if(right < this.#arr.length && this.#arr[right] < this.#arr[result]){
    result = right
   } 
   if(idx == result){
    break
   }
   this.swap(idx, result);
   idx = result
        }
    }

    swap(i, j) {
        let temp = this.#arr[i];
        this.#arr[i] = this.#arr[j];
        this.#arr[j] = temp;
    }

   get(){
    if(this.#arr.length <= 0){
        return undefined
    }else{
        return this.#arr[0]
    }
   }
}
var findKthLargest = function(arr, k) {
  const hp = new MaxHeap();
for(let i = 0 ; i < k ; i++){
    hp.insert(arr[i])
}

for(let i = k ; i < arr.length ; i++){
    let a = hp.get()
    if(a < arr[i]){
        hp.remove()
        hp.insert(arr[i])
    }
}
return hp.get() 
};


let arr = [3,2,3,1,2,4,5,5,6]
let k = 4
console.log(findKthLargest(arr,k))


function findKthLargest(arr, k) {
    const hp = new MaxHeap();
  for(let i = 0 ; i < k ; i++){
      hp.insert(arr[i])
  }
  
  for(let i = k ; i < arr.length ; i++){
      let a = hp.get()
      if(a < arr[i]){
          hp.remove()
          hp.insert(arr[i])
      }
  }
  return hp.get() 
  };