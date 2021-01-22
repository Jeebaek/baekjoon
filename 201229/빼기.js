// 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 첫째 줄에 A-B를 출력한다.


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
    if ( A <= 0 || A >= 10 || B <=0 || B >= 10)
        process.exit()
    
    console.log(A-B);  
  
}).on("close", () => {

  process.exit();
});
