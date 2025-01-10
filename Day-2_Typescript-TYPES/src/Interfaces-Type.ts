// 기본문법
// interface 이름 {
//     속성이름 : 속성타입;
//     속성이름 : 속성타입;
//     메서드이름() : 메서드타입
// }

interface User {
  id: number;
  name: string;
  isPremium: boolean;
  someMethod(): void;
}

const userA: User = {
  id: 3,
  name: "hoho",
  isPremium: false,
  someMethod() {
    console.log("some method called");
  },
};

// type alias vs interface
// 두 기능의 목적은 크게 다르지 않음

// 타입 Alias => type User = { }
// 타입 Alias => 객체 포함, 리터럴, 원시값등을 타입 값으로 가질 수 있음.

// 인터페이스 => interface User { }
// 인터페이스 = > 객체 타입(형태)으로 사용해야 함
// 확장 문법이 다름

// readonly & optional property
interface User2 {
  readonly id: number;
  name: string;
  isPremium?: boolean;
}

const testUser: User2 = {
  id: 100,
  name: "hihi",
};

testUser.id = 200; // readonly 프로퍼티이기 때문에 변경 불가.

// 메서드, 함수 타입
interface User3 {
  readonly id: number;
  name: string;
  isPremium?: boolean;
  //   greet(): void;
  greet(message: string): string;
}

const testUser2: User3 = {
  id: 100,
  name: "haha",
  isPremium: false,
  greet(message: string) {
    return `${message}, ${this.name}`;
    // return "hello, haha"; // name에 string 사용시 return
    // console.log("hello, haha");
  },
};

testUser2.greet("hello"); // greet에 파라미터전달 시 ()파라미터 전달
// console창 출력 -> hello.haha

// 확장 및 조합
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
}

interface Student extends Person, Employee {
  // Person 상속받기 : extends 상속인터페이스이름
  studentId: number;
}

const personA: Person = {
  name: "haha",
  age: 30,
};
const studentA: Student = {
  name: "hoho",
  age: 25,
  studentId: 12,
  employeeId: 232323,
};
