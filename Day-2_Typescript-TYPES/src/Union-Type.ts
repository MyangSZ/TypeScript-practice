// 유니언 기초
let userId: string | number;

userId = 1;
userId = "3";

// 다른 타입 사용시 error
// userId = true
// userId = {}

function printUserId(id: string | number) {
  console.log(id);
}

printUserId("1");
printUserId(100);

printUserId({}); // error 발생

// type narrowing (타입 좁히기. 타입관련 오류 예방)
function processValue(value: number | string) {
  // 문자일 경우
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  // 숫자일 경우( 숫자값을 문자열로 변경 후 toUpperCase 호출)
  return value.toString().toUpperCase();
}

// 배열 사용 예시
let mixedValues: (string | number)[];
mixedValues.push("100");
mixedValues.push(100);

mixedValues.push([]); // error

// 리터럴과 유니언 타입
const toggle = (option: "on" | "off") => {
  console.log(option);
};
toggle("on");
toggle("off");

toggle(true); // error
toggle(0); // error

type SIze = "xs" | "s" | "m" | "l" | "xl";
let tShirtSize: SIze;

tShirtSize = "s";
tShirtSize = "xxl"; // error

// 함수 파라미터 사용 에시
function setSize(size: Size) {
  switch (size) {
    case "s": // s처리
      break;
    case "xs": // xs처리
      break;
  }
}

// type aliases와 유니언
// 변수가 특정 값들 중 하나만 가질수 있도록 제한 가능
type SuccessCode = 200 | 201 | 202;
type ErrorCode = 500 | 501 | 503;

let responseCode: SuccessCode | ErrorCode;

responseCode = 200;
responseCode = 500;
responseCode = 404; // error(미포함)
