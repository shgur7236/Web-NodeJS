var arr = ['A','B','C','D'];
console.log(arr[0]);
console.log(arr[3]);
arr[2] = 3;
console.log(arr);
console.log(arr.length);

//배열의 맨 앞에 값 추가 
arr.unshift(1);
console.log(arr);

//배열의 맨 앞 값 제거
arr.shift();
console.log(arr);

//배열의 맨 뒤에 값 추가
arr.push(2);
console.log(arr);

//배열의 맨 뒤 값 제거
arr.pop();
console.log(arr);

console.log('-splice--');
//배열의 중간에 값 추가, 삭제
// 앞에 추가 [ 'a', 'b', 1, 2, 3]
const arr1 = [1, 2, 3];
arr1.splice(0, 0, 'a', 'b');
console.log(arr1);

// 뒤에 추가 [1, 2, 3, 4, 5]
const arr2 = [1, 2, 3];
arr2.splice(arr.length, 0, '4', '5');
console.log(arr2);

// 중간에 추가 [1, 'a', 'b', 2, 3]
const arr3 = [1, 2, 3];
arr3.splice(1, 0, 'a', 'b');
console.log(arr3);

// 앞에서 3개 원소 삭제
const arr4 = ['a', 'b', 'c', 1, 2, 3];
arr4.splice(0, 3);
console.log(arr4);

// 중간(idnex 1) 2개 원소 삭제
const arr5 = [1, 'a', 'b', 2, 3];
arr2.splice(1, 2);
console.log(arr5);

// 마지막 원소 삭제
const arr6 = [1, 2, 3, 'a'];
arr3.splice(arr6.length - 1, 1);
console.log(arr6);