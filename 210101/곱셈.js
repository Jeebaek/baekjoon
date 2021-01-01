// (세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.
// (1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.
// 첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.
// 첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const A = parseInt(input[0]);
const B = input[1];

const res3 = A * parseInt(B[2]);
const res4 = A * parseInt(B[1]);
const res5 = A * parseInt(B[0]);

console.log(res3);
console.log(res4);
console.log(res5);
console.log(A * parseInt(B));
