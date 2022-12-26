/**
 * Array.forEach 를 구현해보기
 */

let arr = [1, 2, 3];

function foreach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

// 실험

// 오리지날
arr.forEach((each, index) => {
  console.log(each, index);
});

// 나의 함수
foreach(arr, (each, index) => {
  console.log(each, index);
});
