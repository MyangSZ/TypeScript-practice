// 변수
let myNumber = 4;
let myString = "Hello";
let myBool = true;

myNumber = 22;
myNumber = "11"; // error

// 함수 변환 타입
function add(x: number, y: number) {
  return x + y;
  // return `${x}${y}` - 반환타입 string으로 반환됨
}
const n = add(10, 4);

// 배열 & 객체

let nums = [1, 2, 3, 4];

let user = { name: "haha", age: 30 };

nums.push("hello"); // 숫자 배열로 추론되었으므로 문자열입력시 오류
user.age = "20"; // age는 number타입으로 문자열 입력시 오류

let mixedValues = [1, 2, 3, "red", "green", "blue"];
