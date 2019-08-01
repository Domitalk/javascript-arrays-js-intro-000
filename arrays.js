var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var firstArray = [element, ...array];
  return firstArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var secondArray = [array]
  secondArray.unshift(element);
  return secondArray;
}
