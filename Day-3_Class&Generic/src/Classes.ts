// 기본 문법

// class 클래스 이름 {
//     필드
//     메서드
// }

// interface 적용
interface ContinentInterface {
  getContinentName(): string;
}

interface CountryInterface {
  capital: string;
  getInfo(): string;
}

class Continent implements ContinentInterface {
  protected continentName: string;

  constructor(name: string) {
    this.continentName = name;
  }

  getContinentName() {
    return this.continentName;
  }
}
// 순서 중요! 확장키워드 먼저 그 후 인터페이스
class Country extends Continent implements CountryInterface {
  #name: string;
  capital: string;

  constructor(continentName: string, name: string, capital: string) {
    super(continentName);
    this.#name = name;
    this.capital = capital;
  }

  getInfo() {
    return `${this.#name}, ${this.capital}, ${this.getContinentName()}`;
  }
}
let country = new Country("Asia", "South Korea", "Busan");

// country.name = "South Korea";
// country.capital = "Busan";

console.log(country.getInfo());

// 추상 클래스
// 추상클래스는 인스턴스화 할 수 없다.
abstract class AbstractCountry {
  name: string;
  capital: string;

  constructor(name: string, capital: string) {
    this.name = name;
    this.capital = capital;
  }

  setup(): void {
    console.log("setup complete");
  }
  // abstract 메서드는 추상클래스 내부에서 시그니처만 정의
  abstract displayInfo(): void;
}

// class를 만들어서 상속을 받아줘야 한다.

// extends 키워드를 사용해 상속을 받는다.
// 상속받는 서브클래스에서 구체적 구현
class MyCountry extends AbstractCountry {
  // abstract키워드가 사용된 멤버는 무조건 구현해줘야 한다.
  displayInfo() {
    console.log("display info called");
  }
}

const myCountry = new MyCountry("Germany", "Berlin");
myCountry.setup();
myCountry.displayInfo();
