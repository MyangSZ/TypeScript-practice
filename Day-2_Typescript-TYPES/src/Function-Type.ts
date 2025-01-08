// Parameter
function add(x: number, y: number): number {
  return x + y;
}

const result = add(10, 5);
// 호출시 조합
// add ('', 1) // 문자+숫자
// add(1, "") // 숫자+문자
// add(1,1) // 숫자+숫자

// Parameter2
function addToCart(name: string, price: number, quantity: number) {
  return `${name}, ${price}, ${quantity}`;
}
addToCart("apple", 200, 3);
addToCart("banana", 110);
addToCart("grape", 110, 10, false);

// Default Parameter
// 처리 확인해보기
function addToCart(name: string, price: number, quantity: number = 1) {
  return `${name}, ${price}, ${quantity}`;
}
addToCart("apple", 10); // apple, 10, 1 반환
addToCart("banana", 5, 3); // banana, 5, 3 반환

//optional parameter (파라미터 전달되지 않는 상황 대비해서 처리를 해줘야 한다.)
function addToCart(name: string, price: number, quantity?: number) {
  // if(quantity){
      // login처리
  // }
  return `${name}, ${price}, ${quantity || 1}`;
}
addToCart("apple", 200);
addToCart("banana", 100, 3);

// Contextual typing
// 배열 메소드 : Map(), reduce(), filter(), forEach() / 콜백함수 사용

const numbers: number[] = [1,2,3,4,5]
const letters: string[] = ['a','b','c','d']

numbers.map(element => {
    element. // 타입에 맞는 메서드들을 자동유추시스템에서 추천해준다.
})

letters.forEach(letter=> {
    letter.
})



// Return type annotation
function addToValues(x: number, y: number): srting{
    return `${x}i${y}` // 문자열로 연결시켜서 반환
}

function addToNumbers(x: number, y: number): number{
    return x + y // 문자열로 연결시켜서 반환
}

function isTen(x: number, y: number): boolean{
    return x + y ===1 // 문자열로 연결시켜서 반환
}


// void, never
// never타입의 경우 용도가 제한적이기에 일반적으로 개발상황에 자주 사용되지 않음
function loginMessage(message: string): void {
    console.log()
}

function throwError(message: string): never {
    throw new Error(Message)
}