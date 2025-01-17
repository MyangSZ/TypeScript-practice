// typeof

// typeof 'string'
// typeof 'number'

type Id = number | string;
let id: Id = 1;

if (typeof id === "string") {
  // 문자열 ID 경우 로직 처리
}

function getId(id: Id) {
  if (typeof id === "number") {
    return id;
  }

  return Number(id);
}

getId(1);
getId("1");

// 동일성 좁히기 ( equality narrowing)
type Option = "on" | "off";

function power(option: Option) {
  if (option === "off") {
    console.log("power off");
  } else {
    console.log("power on");
  }
}

power("on");
power("off");

// in 키워드 사용 방법
type iOS = { iMessage: () => void };
type android = { message: () => void };

function sendMessage(os: iOS | android) {
  if ("iMessage" in os) {
    os.iMessage(); // iOS 로 좁혀진다
  } else {
    os.message(); // android 케이스
  }
}

sendMessage({
  iMessage: () => {
    console.log("sending iMessage");
  },
}); // iOS 타입
sendMessage({
  message: () => {
    console.log("sending message");
  },
}); // android 타입

// instanceof narrowing
// let myObject = new MyObject()
// if(myObject instanceof myObject){

// }

// - api응답을 처리하는 함수를 다루는 상황
class ApiResponse {
  data: any;
}
class ErrorResponse {
  message: string;
}

async function handleApiResponse(response: any) {
  // 좁히기 들어가는 부분.

  if (response instanceof ApiResponse) {
    // 데이터 처리
  } else if (response instanceof ErrorResponse) {
    // 에러 처리
  }
}

// 함수호출
const apiResponse = new ApiResponse();
const errorResponse = new ErrorResponse();

handleApiResponse(apiResponse);
handleApiResponse(errorResponse);

// 타입 가드 (type predicates)
// 타입스크립트에서 사용자 정의 타입가드를 만들 때 사용
// 복잡할 수 있는 타입체킹 로직을 하나의 함수로 추출해서 사용해 코드 관리와 가독성이 좋다.

// function 이름 : something is SomeType(반환타입 지정)

function isErrorResponse(
  response: ApiResponse | ErrorResponse
): response is ErrorResponse {
  return (response as ErrorResponse).message !== undefined;
}

const response = { message: "error.." };

if (isErrorResponse(response)) {
  // 에러 케이스
  console.log(response.message);
}

// 식별 가능한 유니언 타입 (discriminated union)
// 여러 타입중 하나를 식별할 수 있는 공통속성을 가진 유니언 타입

type SuccessResponse = {
  type: "success";
  data: any;
};
type ErrorResponseType = {
  type: "error";
  message: string;
};

type ApiResponseType = SuccessResponse | ErrorResponseType;

function handleResponse(response: ApiResponseType) {
  if (response.type === "success") {
    console.log("data:", response.data);
  } else {
    console.log(response.message);
  }
}
