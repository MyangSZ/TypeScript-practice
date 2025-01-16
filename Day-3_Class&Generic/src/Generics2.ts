// 제네릭 클래스

class Item<T> {
  #content: T | null;
  constructor() {
    this.#content = null;
  }

  setItem(value: T) {
    this.#content = value;
  }
  getItem(): T | null {
    return this.#content;
  }
}

const numberItem = new Item<number>();
numberItem.setItem(100);
numberItem.getItem(); // 100 반환

const stringItem = new Item<string>();
stringItem.setItem("Hello");
stringItem.getItem(); // Hello 반환

// 클래스 + 인터페이스 패턴
// 사용자 데이터 / User

interface User {
  id: number;
  name: string;
}

interface Product {
  id: number;
  price: number;
  name: string;
}

// 제네릭 제약 주는 방법
interface WithId {
  id: number;
}

// 전달받은 인터페이스의 특정 속성 또는 메서드를 가지고 있어야 할 때 (조건을 주어야 할 때)
// 제약을 추가 : entends 제약조건
interface Store<T extends WithId> {
  // stroe 제네릭 인터페이스 사용시 모든 저장객체들이  withID의 id를 가지고 있어야 한다.
  findById(Id: number): T | undefined;
  save(item: T): void;
}

class UserRepository implements Store<User> {
  #users: User[] = [];

  findById(id: number): User | undefined {
    return this.#users.find((user) => user.id === id);
  }

  save(user: User): void {
    this.#users.push(user);
  }
}

const userRepo = new UserRepository();
userRepo.save({
  id: 1,
  name: "haha",
});
userRepo.save({
  id: 2,
  name: "hoho",
});

console.log(userRepo.findById(1));

class ProductRepository implements Store<Product> {
  #products: Product[] = [];

  findById(Id: number): Product | undefined {
    return this.#products.find((product) => product.id === Id);
  }

  save(product: Product): void {
    this.#products.push(product);
  }
}

const productRepo = new ProductRepository();
productRepo.save({
  id: 10,
  price: 100,
  name: "hihi",
});
productRepo.save({
  id: 20,
  price: 200,
  name: "hoho",
});

console.log(productRepo.findById(20));
