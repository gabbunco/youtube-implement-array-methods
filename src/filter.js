/**
 * Array.filter 을 구현해보기
 */

let arr = [1, 2, 3, 4, 5];

function filter(arr, callback) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

let filteredArr = arr.filter((each, _index) => each >= 3); // [3,4,5]
console.log(filteredArr);
filteredArr = filter(arr, (each, _index) => each >= 3); // [3,4,5]
console.log(filteredArr);
console.log(arr);
`