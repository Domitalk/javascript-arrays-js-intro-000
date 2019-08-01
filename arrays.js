var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var array = ["a", "b", "c"];
  var secondArray = [element, ...array];
  return secondArray;
}
