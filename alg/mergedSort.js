const numbers = [6, 5, 3, 1, 8, 7, 2, 4];

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

function merge(left, right) {
  const joinedArray = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      joinedArray.push(left[i]);
      i++;
    } else {
      joinedArray.push(right[j]);
      j++;
    }
  }
  //There's a trick here lets say if an i(5) = left.length(5)
  //Co nghia la thang arr ben trai ko con gi ca khi left.slice(5) []
  //Con thang ben phai thi slice(3)=>copy het va concat ;)
  return joinedArray.concat(left.slice(i)).concat(right.slice(j));
}

const sortedNumber = mergeSort(numbers);
console.log({ sortedNumber });
