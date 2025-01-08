// 배열타입 1. type[]
let nums: number[] =[1,2,3,4,5] // 숫자만 허용
let strs: string[] ["a","b","c","d"] // 문자만 허용

let bools: boolean[] =[false,true, false,true] // boolean만 허용

nums.push(5)
nums.push(7)

// 타입이 다를 경우 에러 발생
nums.push("8") // 문자열 타입을 숫자 타입에 할당 하지 못한다.
nums[0] = "1" // 문자열타입을 숫자타입에 할당할 수 없다.

// boolean type
bools.push(ture) // 문자, 숫자 들어갈 시 에러



// -------------------------------------------


// 배열타입 2. Array<>
let nums: Array<number> =[1,2,3,4,5] // 숫자만 허용
let strs: Array<string> ["a","b","c","d"] // 문자만 허용

nums.push(5)
nums.push(7)

nums.push("8") // 문자열 타입을 숫자 타입에 할당 하지 못한다.

nums[0] = "1" // 문자열타입을 숫자타입에 할당할 수 없다.