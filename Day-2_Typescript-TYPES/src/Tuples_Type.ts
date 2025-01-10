// 기본 문법
let myTuple: [string, number, boolean];
myTuple = ["hello", 15, false]; // ok
myTuple = ["hello", true, 1]; // error
myTuple = ["hello", 15]; // error

// 사용예시 1
function getuserInfo(): [number, string] {
  return [1, "Sam"];
}
const [userid, username] = getuserInfo();

// 사용예시 2
type Flavor = string;
type Price = number;

type IceCream = [Flavor, Price];

const vanila: IceCream = ["Vanila", 500];

vanila[0];
vanila[1];

// 사용예시 3
type lat = number;
type lng = number;

type coord = [lat, lng];

let coords: coord[] = [];

coords.push([36, -99]);
coords.push([33, -12]);

coords.push([false, "1"]); // error

// 반복문 사용 시
for (const [lat, lng] of coords) {
  console.log(lat, lng);
}
