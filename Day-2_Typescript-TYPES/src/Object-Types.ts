// 기본 객체 타입

// {
//     property_name: property_type
// }


// 타입명시 방법
let monitor: { brand: string; price: number}

monitor.brand = "SAMSUNG"
monitor.price = " 486"

// 리터럴 객체 자체에 값을 할당 하는 방법
monitor = {
    brand: "LG"
    price: 450
}

monitor.displaySize = "39inch" // 지정 객체가 존재하지 않음. 에러


// 타입 추론 방법
// 각 객체에 대한 타입을 검사해 추론
let monitor = {
    brand: "LG",
    price: 450
}

monitor.price = "123" // 문자열타입을 입력했기 때문에 에러 발생. price는 넘버타입
monitor.displaySize = " 33inch" // displaySIze 객체가 졵제하지 않음. 에러

// optional 포로퍼티(속성이름 뒤 ?. 필수아닌 선택적)
let user: {id: string; name: string; age?: number}

user= {
    id: "asdf",
    name: "hoho"
}

// Readonly 프로퍼티 (읽기전용. 객체 처음 생성 될 때만 값 할당. 이후 값 변겅 불가 )
let user: {readonly id: string; name: string; agex: number}

user= {
    id: "asdf",
    name: "hoho"
}
user.name="hihi"
user.id = "qwer" // 아이디 할당 붉가. 읽기전용 프로퍼티이기 때문

// 주로 환경설정 정보를 가지고 있는 객체에 사용
let apiConfig: {
    readonly clientKey: string;
    readonly url: string;
}


// 타입 별칭 (Type Alias)
// type 이름 = {
//     id: string;
// }

type UserType = {
    id: string;
    name: string;
    age: number;
}

let user1: UserType = {
    id: "1",
    name: " haha",
    age: 22
}
let user2: UserType = {
    id: "2",
    name: " hoho",
    age: 25
}

let users: UserType[]
users.push(user1)
users.push(user2)

// error
users.push({})
users.push(
    id: "1",
)

// Nested 객체 (중첩 객체)
// 배열, optional, readonly 사용가능
type Payload = {
    timestamp: number;
    type: 'string'
    user: {
        readonlyid: string; 
        isActive?: boolean
        emain: string[]
    }
}

const payload: Payload = {
    timestamp: 123456789,
    type: 'event',
    user: {
        id: "123",
        isActive: true,
        email: ['asdf@adf@asdfw.com']
    }

}