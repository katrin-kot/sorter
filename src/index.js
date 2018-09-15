function compareNumbers(a,b){
  return a-b;
}

class Sorter {
  constructor() {
    this.arr = []; 
    this.comparator=compareNumbers;
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
    indices.sort(compareNumbers);
    if (indices.length===2) {
      if (this.comparator(this.arr[indices[0]],this.arr[indices[1]])>0){
        this.swap(indices[0],indices[1]);
      }
      // this.arr.sort(compareNumbers);
    }else if (indices.length===3){
      if (this.comparator(this.arr[indices[0]],this.arr[indices[1]])>0){
        this.swap(indices[0],indices[1]);}
      if (this.comparator(this.arr[indices[1]],this.arr[indices[2]])>0){
          this.swap(indices[1],indices[2]);}
      if (this.comparator(this.arr[indices[0]],this.arr[indices[1]])>0){
            this.swap(indices[0],indices[1]);}
    }
  }

  swap(a, b) {
    let temp=this.arr[b];
    this.arr[b]=this.arr[a];
    this.arr[a]=temp;

  }

  setComparator(compareFunction) {
    this.comparator=compareFunction;
  }
}

module.exports = Sorter;