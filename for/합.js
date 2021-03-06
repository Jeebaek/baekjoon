// n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

// 출력
// 1부터 n까지 합을 출력한다.

// n의 조건(n < 1 || n > 10000)을 정의한 후 -> 1부터 n까지의 합을 for문을 이용해서 쓴다

// n+1
// n+2 (n+1)+1
// n+3 (n+2)+1
// n+4 (n+3)+1 --> 직접 더해보니 직전 더한 값에서 1씩 증가함을 발견-> for문에서 합에서 1씩 증가하도록 함

// let sum = 0;
// for(let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }  -> 1부터 100까지 더하는 자바스크립트 문법 검색함


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
let input = [];
rl.on("line", (line) => { 
    input.push(line);
    
   let n = parseInt(input[0]);
     
   if (n < 1 || n > 10000) 
      process.exit();
  
    let sum = 0;
    for(let i = 1; i <= n; i++) {
      sum = sum + i
    }
  
      console.log(sum)  
  
}).on("close", () => {

  process.exit();
});
