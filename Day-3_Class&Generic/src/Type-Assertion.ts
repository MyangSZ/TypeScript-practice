// 기본문법
// 표현식 as 지정할 타입

const someValue: unknown = "Hey there";
// unknown 타입에 대해 타입을 좁히기 전까지 구체적인 연산이나 메서드 호출 허용 안함
const len = (someValue as string).length;
// 변수에 원하는 타입 지정 () 감싸주기

// html내부 요소에 접근하고 요소의 특정 속성을 사용할 때 타입단언 자주 사용
const button = document.getElementById("button") as HTMLButtonElement;

// button이 html 문서에 존재하지 않을 경우 null 값 반환된다.

// html 문서에 존재여부 확인 1
if (button instanceof HTMLButtonElement) {
  button.disabled = false;
}
// html 문서에 존재여부 확인 2
if (button) {
  button.disabled = false;
}
