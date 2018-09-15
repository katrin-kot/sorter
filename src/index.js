function compareNumbers(a,b){
  return a-b;
}

class Sorter {
  constructor() {
    this.arr = []; 
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
     return this.arr;
  }

  sort(indices) {
    if (indices.length===2) {
      if (this.arr[indices[0]]>this.arr[indices[1]]){
        this.swap(indices[0],indices[1]);
      }
      // this.arr.sort(compareNumbers);
    }
  }

  swap(a, b) {
    let temp=this.arr[b];
    this.arr[b]=this.arr[a];
    this.arr[a]=temp;

  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;