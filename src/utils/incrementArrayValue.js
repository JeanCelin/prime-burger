export function incrementArrayValue(arr, index) {
  const newArray = [...arr];
  newArray[index] += 1;
  return newArray;
}
