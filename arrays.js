var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var firstArray = [array];
  var secondArray = [element, ...array];
  return secondArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var firstArray = [array];
  firstArray = [element, ...array];
  return firstArray;
}
