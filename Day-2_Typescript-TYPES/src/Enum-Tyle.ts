// 기본 문법
enum 이름 {
  // enum 맴버. 각 맴버는 할당값이 존재.
  // 기본적으로 1씩 증가하는 값으로 자동 설정
  상수값1,
  상수값2,
  상수값3,
}

// 숫자형 enum
enum PlayerState {
  Buffering,
  Playing,
  Paused,
  Seeking,
}

let currentState: PlayerState;
currentState = PlayerState.Buffering;
currentState = PlayerState.Playing;

currentState = "Playing"; // error

// enum 맴버 중 하나의 값과 비교해주는 메서드
const isPlaying = (state: PlayerState) => {
  return state === PlayerState.Playing;
};
// 플레이어 재생 중?
isPlaying(currentState);

// 문자형 enum
enum Direction {
  Left = "LEFT",
  Right = "RIGHT",
  Up = "UP",
  Down = "DOWN",

  // 명시적 문자열 값 할당. 추후 디버깅 또는 로깅할 떄 유리함.
  // 숫자형과 비교 시 디버깅시 식별이 어려울 수 있음.
}

function move(dir: Direction) {
  switch (dir) {
    case Direction.Left: // 왼쪽로직
      break;
    case Direction.Right: // 오른쪾 로직
      break;
  }
}

move(Direction.Left);
move(Direction.Right);
