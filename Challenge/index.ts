// 제네릭 클래스 (큐 방식으로 동작하는 클래스)
// 큐:  선형 자료구조, FIFO(First-in-First-Out)

class GenericQueue<T> {
  private items: T[] = [];

  // enqueue 메서드 (큐를 데이터에 추가)
  enqueue(item: T): void {
    this.items.push(item);
  }

  // dequeue 메서드 (큐의 맨처음 데이터를 꺼낸다)
  dequeue(): T | undefined {
    return this.items.shift();
  }
  // peek 메서드 (큐의 맨처음 데이터 확인)
  peek(): T | undefined {
    return this.items[0];
  }
  // size 메서드 (현재 큐의 사이즈 반환)
  size(): number {
    return this.items.length;
  }
}

const stringQ = new GenericQueue<string>();
stringQ.enqueue("Hello");
console.log(stringQ.peek()); // Hello 반환
stringQ.dequeue(); // Hello 삭제
stringQ.enqueue("TypeScript"); // TypeScipt 큐에 추가
console.log(stringQ.size()); // 1 반환
console.log(stringQ.peek()); // TypeScipt 반환

// 숫자로 사용하고 싶을 떄
const numberQ = new GenericQueue<number>();
numberQ.enqueue(10);
numberQ.enqueue(20);

// 큐클래스는 다양한 타입의 데이터를 유연하게 처리할 수 있다.
