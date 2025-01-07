// console.log("Hello Typescript");

// const nums: number [] = [];
// const a = 10 + nums[0]

// const someString = "typescript!";

// someString.endsWith("!");

import { printName } from "./util";
printName("typescritp");

// 문자열 string
const a: string = "";
const b: string = "";
const c: string = ``; // 템플릿 리터럴

let myName: string = "steve";
let message: string = `Hello, ${myName}`;

myName.toLocaleUpperCase();
message = 123; // string 타입이 아닌 값을 할당할 수 없다.

// 숫자타입 number
// 모든 숫자들은 numver로 타이핑
let n: number = 100;
n = "100"; // number타입은 string 타입 사용 불가
n.toUpperCase();

let count: number = 10;
let price: number = 9.99;
let temperature: number = -10;
let distance: number = 3.4e-8;

let total: number = count * price;
let average: number = total / 2;

let infinity: number = Infinity;
let minusInfinity: number = -Infinity;
let iAMNotANumber: number = NaN;

// 블리언 boolean
let isOpen: boolean = true;
let isCompleted: boolean = false;

if (isOpen) {
  console.log("hello we are open!");
}
if (isCompleted) {
  console.log("job not complete");
}

// && || ! 논리 연산자
// 두개의 값을 가지는 블리언은 조건문에서 사용하고 논리연산자와 사용할 수 있다.
let isAvailable: boolean = isOpen && !isCompleted;

// null 타입 (값이 비어 있다.)
// 유니언 타입(한가지 이상의 타입을 갖는 것). 유니언 타입과 함꼐 사용 된다.
// undefind (값이 할당 되지 않았다.)/ null과 다르다
let user: string | null = null;

function login(userName: string) {
  user = userName;
}
function logout() {
  user = null;
}
login("hoho");

// any 타입
// 문자열, 객체, 숫자, 함수 등 어떠한 타입의 값 할당 가능
// 모든 타입체크를 우회한다.

// any타입일 경우 변수에 대한 타입체크 하지 않음
// 되도록이면 사용하지 않는게 좋다.
// any타입의 사용을 최소화 하는게 좋ㄷ.

let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();
