// Requirements: Given an input array of unique elements, return a max-heap created out of the same elements. Expected
// worst-case time complexity. O(n log(n))
// example:
// Input : [2,7,26,25,19,17,1,90,3,36]
// Output : [90, 36, 17, 25, 26, 7, 1, 2, 3, 19]



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

   display(){
    console.log(this.#arr)
   }
}
const hp = new MaxHeap();
let arr = [3,2,1,5,6,4]
let k = 2
for(let i = 0 ; i < k ; i++){
    hp.insert(arr[i])
}
hp.display()

for(let i = k ; i < arr.length ; i++){
    let a = hp.get()
    if(a < arr[i]){
        hp.remove()
        hp.insert(arr[i])
    }
}
hp.display()