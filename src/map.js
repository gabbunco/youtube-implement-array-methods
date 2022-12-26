/**
 * Array.map 을 구현해보기
 */

let arr = [1, 2, 3];

function map(arr, callback) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i));
  }

  return newArr;
}

let mappedArr = arr.map((each, _index) => {
  return each + 1;
});
console.log(mappedArr); // [2,3,4]

mappedArr = map(arr, (each, _index) => each + 1);
console.log(mappedArr); // [2,3,4]

console.log(arr)