var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const firstArray = ["a", "b", "c"]
  const secondArray = [element, ... firstArray]
  return secondArray
}
