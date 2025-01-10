// 타입을 매개변수처럼 전달해 유연하고 재사용 가능한 컴포넌트를 만들수 있게 해준다.
// 다양한 타입에 동작하는 함수, 클래스, 인터페이스 등을 정의 할 수 있다.
// 코드의 중복성 줄이고 타입 안정성 향상 목표

// 기본문법
// <타입> 기본적으로 Type 또는 T

function genericFunction<T>(arg: T): T {
  return arg;
}

interface genericInterface<T> {}

class genericClass<T> {}

// Array<number>
let numbers: Array<number> = [1, 2, 3, 4, 5];
let strings: Array<string> = ["1", "2", "3", "4", "5"];

let div = document.querySelector<HTMLDivElement>("#myDIv1");
let button = document.querySelector<HTMLButtonElement>("#myButton1");

button?.click();

// ------------------------------------
// function getFirstElement(arr: number[]) {
//   if (!arr.length) {
//     return undefined;
//   }
//   return arr[0];
// }

// function getFirstStringElement(arr: string[]) {
//     if (!arr.length) {
//         return undefined;
//       }
//       return arr[0];
// }

// 제네릭 패턴 사용
function getFirstElement<T>(arr: T[]): T | undefined {
  if (!arr.length) {
    return undefined;
  }
  return arr[0];
}

const firstNunber = getFirstElement(numbers);
// const firstSrting = getFirstStringElement(strings)
const firstString = getFirstElement(strings);

// 제네릭 인터페이스

interface Dict<T> {
  [key: string]: T;
}

// 두개의 타입을 전달하는 interface
interface Entry<K, V> {
  key: K;
  value: V;
}

let entry: Entry<string, number> = {
  key: "age",
  value: 30,
};

let entry2: Entry<number, string[]> = {
  key: 1,
  value: ["red", "green", "blue"],
};

// interface strDict {
//     [key: string]: string
// }

let strObj: Dict<string> = {
  name: "huhu",
};

// interface numDict {
//     [key: number]: number
// }

let numObj: Dict<number> = {
  age: 22,
};
