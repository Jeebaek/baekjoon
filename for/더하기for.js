// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 입력
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 출력
// 각 테스트 케이스마다 A+B를 출력한다.


// 내생각-> 처음에 몇개(T)의 덧셈을 테스트할건지 입력 T의 조건
//  그다음 A와 B값을 T번 입력 -> A+B의 결과가 T번 나온다 




const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 
let input = []
rl.on("line", (line) => { 
  const array = line.split(" ");
  const result = [] 
  for (var i =0; i < array.length; i++){
      result.push(parseInt(array[i]))
      if(result[0] <=0 || result[1] >= 10){
        process.exit();
      }
    }
  
  input.push(result)

}).on("close", () => {
  let t = input[0];
  for (let i = 1; i <= t; i++){
    console.log(input[i][0] + input[i][1]);
  }

  process.exit();
});
          
