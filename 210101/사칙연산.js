// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 
// 두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)
// 첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 

let input = [];
rl.on('line', function (line) {
  input = line.split(' ')

    let A = parseInt(input[0])
    let B = parseInt(input[1])
    if ( A < 1 || A > 10000 || B < 1 || B > 10000)
        process.exit()
    
    console.log(A+B);
    console.log(A-B);
    console.log(A*B);
    console.log(Math.floor(A/B));
    console.log(A%B);
  
}).on("close", () => {

  process.exit();
});
