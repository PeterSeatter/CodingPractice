/*
@Title: Binary Search Program
@Date: 26/12/19
@Author: Peter Seatter
@Verson: 2
@Description: Allows users to input an elements into an array and it will do
a binary and sequential search.
*/
class SearchAlgorithms {
  constructor(array) {
    try {
        if(!Array.isArray(prArray)){
          throw "Value entered is not an array";
        }
    } catch (e) {
      console.log(e);
    }
  };

  //This does the Binary search of the data in the array
  Binary() {
    var leftMost = 0;
    var rightMost = this.array.length - 1;
    var mapIndex;
    try {
      while(leftMost <= rightMost) {
          mapIndex = Math.floor((leftMost + rightMost) / 2);
          if(this.array[mapIndex] < (term)) {
              leftMost = mapIndex + 1;
          } else if(this.array[mapIndex] > (term)) {
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
  Sequential() {
    for(var i = 0; i < this.array.length; i++) {
        if(this.array[i] == (term)) {
            return i;
        }
    }
    return -1;
    };
}
