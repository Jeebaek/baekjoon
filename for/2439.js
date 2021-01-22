
// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.


// 원래는
// 5를 입력하면
// 별
// 별별
// 별별별
// 별별별별
// 별별별별별

// 이번에는 5를입력하면
// 공백 공백 공백 공백 별 \n n-1만큼의 공백/n -(n-1)만큼의 별 
// 공백 공백 공백 별   별 \n n-2만큼의 공백/n -(n-2)만큼의 별
// 공백 공백 별   별   별 \n n-3만큼의 공백/n -(n-3)만큼의 별
// 공백 별   별   별   별 \n n-4만큼의 공백/n -(n-4)만큼의 별
// 별   별   별   별   별 \n n-5만큼의 공백/n -(n-5)만큼의 별




const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 

let star = '';
rl.on('line', function (line) {
  input = line.split(' ')
    
    let n = parseInt(input[0])
    
    for (var i = 0; i < n; i++) {
        for (var j = n-1 ; j > i ; j--){   
            star +=' '   
            }
        for (var k = 0; k <= i ; k++) {
          star += '*';
              }
         star += '\n';

  }
        console.log(star);
    
}).on("close", () => {

  process.exit();
});