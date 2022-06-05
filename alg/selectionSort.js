const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length - 1;
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i; j < length; j++) {
      if (array[j + 1] < array[i]) {
        let temp = array[min];
        array[min] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

const sortedNumber = selectionSort(numbers);
console.log({ sortedNumber });
