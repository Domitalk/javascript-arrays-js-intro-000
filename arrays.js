var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const firstArray = [1, 2, 3]
  const secondArray = [element, ... firstArray]
  return secondArray
}
