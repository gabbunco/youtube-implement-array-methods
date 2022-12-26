/**
 * Array.map 을 구현해보기
 */

function map(arr, callback) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i], i));
  }

  return newArr;
}

// 실험

let arr = [1, 2, 3];

// 오리지날
let newArr = arr.map((each, index) => each + index); // [1, 3, 5]
console.log(newArr);

// 나의 함수
newArr = map(arr, (each, index) => each + index); // [1, 3, 5]
console.log(newArr);
