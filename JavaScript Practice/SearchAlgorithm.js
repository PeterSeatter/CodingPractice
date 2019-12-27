/*
@Title: Binary Search Program
@Date: 26/12/19
@Author: Peter Seatter
@Verson: 1
@Description: Allows users to input an elements into an array and it will do
a binary and sequential search.
*/
class SearchAlgorithms {

  boolean searching = true;

  constructor(array) {
    this.array = Array.isArray([/*data for array is put here*/]);
  };

  //This does the Binary search of the data in the array
  function Binary() {
    var leftMost = 0;
    var rightMost = array.length - 1;
    var mapIndex;
    while(leftMost <= rightMost) {
        mapIndex = Math.floor((leftMost + rightMost) / 2);
        if(array[mapIndex].compareTo(term) < 0) {
            leftMost = mapIndex + 1;
        } else if(array[mapIndex].compareTo(term) > 0) {
            rightMost = mapIndex - 1;
        } else {
            return mapIndex;
        }
    }
    return -1;
  };

  //This does the sequential search of the data which is entered.
  function Sequential() {
    for(Integer i = 0; i < array.length; i++) {
        if(array[i].compareTo(term) == 0) {
            return i;
        }
    }
    return -1;
    };

  //starts a try catch statement say if data has been entered into the array of not then it will not work
  try {
    while (searching == true) {
      Binary();
      Sequential();
    } else {
      searching = false;
    }
  } catch (e) {
    alert ("You've got an error in your loop" + e);
  }
}
