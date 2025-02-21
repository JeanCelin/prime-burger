export function decrementArrayValue(arr, index) {
  const newArray = [...arr];
  if (newArray[index] > 0) {
    newArray[index] -= 1;
  }
  return newArray;
}
