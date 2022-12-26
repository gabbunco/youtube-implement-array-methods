/**
 * Array.filter 을 구현해보기
 */

function filter(arr, callback) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

// 실험

let arr = [1, 2, 3, 4, 5];

// 오리지날
let newArr = arr.filter((_each, index) => index >= 2); // [3, 4, 5]
console.log(newArr);

// 나의 함수
filter(arr, (_each, index) => index >= 2); // [3, 4, 5]
console.log(newArr);

// 중요: arr 변하면 안됨
console.log(arr);
`