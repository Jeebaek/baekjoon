// 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
// 첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.
// 첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

// 내생각
// 5를입력하면 -> *이 1개, 2개, 3개, 4개, 5개
// 4를 입력하면 -> *이 1개, 2개, 3개, 4개
// n을 입력하면 -> *이 1개, 2개, 3개... n개 출력
// 먼저 n을 입력하면 별이 나오도록 하고 -> 그다음 for 문을 이용해 n만큼 별이 찍히게 한다!
// 숫자를 별로 변환하는 과정을 알아야함 1 -> * 2 -> **


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 

let star = [];
rl.on('line', function (line) {
  input = line.split(' ')
    
    let n = parseInt(input[0])
    
    if (n < 1 || n > 100)
        process.exit();
    
    for (var i = 0; i < n; i++) {
      for (var j = 0; j <= i; j++){   
        star +="*"   
      }
      star += "\n"
    }
  
    console.log(star)
    
}).on("close", () => {

  process.exit();
});
