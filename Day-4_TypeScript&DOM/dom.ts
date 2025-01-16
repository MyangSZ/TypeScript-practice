// JS에서 제공되는 모든 API를 그대로 사용
// 타입 정의 파일 제공 'lib.dom.d.ts'

// HTMLElement 기반 (div, a, p, head, 등등)

// <a id="MyLink" href="https://google.com">google</a>

const link1 = document.getElementById("myLink");
// 반환값 HTMLElement | null

const link2 = document.querySelector("#myLink") as HTMLAnchorElement;
// 반환값 Element | null

// 메서드가 반환하는 타입 잘 확인!
// 명시적으로 타입을 지정 해줘야 한다.

// 1. 조건문에 instanceof 사용
if (link1 instanceof HTMLAnchorElement) {
  link1.href = "Https://google.com";
}

// 2. 타입 단언 (as HTMLAnchorElement) 조건문 필요 없음.
link2.href = "";
