/**
 * Array.forEach 를 구현해보기
 */

let arr = [1, 2, 3];

function foreach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

// original forEach
arr.forEach((each, index) => {
  console.log(each, index);
});

console.log("---");

// implemented foreach
foreach(arr, (each, index) => {
  console.log(each, index);
});
