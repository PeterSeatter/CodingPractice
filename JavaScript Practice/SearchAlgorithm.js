/*
@Title: Binary Search Program
@Date: 26/12/19
@Author: Peter Seatter
@Verson: 2
@Description: Allows users to input an elements into an array and it will do
a binary and sequential search.
*/
class SearchAlgorithms {
  constructor(Array) {
    try {
        if(!Array.isArray(Array)){
          throw "Value entered is not an array";
        }
        this.Array == Array;
    } catch (e) {
      console.log(e);
    }
  };

  //This does the Binary search of the data in the array
  Binary(term) {
    var leftMost = 0;
    var rightMost = this.Array.length - 1;
    var mapIndex;
    try {
      Array.sort(this.Array);
      while(leftMost <= rightMost) {
          mapIndex = Math.floor((leftMost + rightMost) / 2);
          if(this.Array[mapIndex] < (term)) {
              leftMost = mapIndex + 1;
          } else if(this.Array[mapIndex] > (term)) {
              rightMost = mapIndex - 1;
          } else {
              return mapIndex;
          }
      }
    } catch (e) {
      console.log(e);
    }
    return -1;
  };

  //This does the sequential search of the data which is entered.
  Sequential(term) {
    for(var i = 0; i < this.Array.length; i++) {
        if(this.Array[i] == (term)) {
            return i;
        }
    }
    return -1;
  };
}
