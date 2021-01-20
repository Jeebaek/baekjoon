const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
rl.on('line', line => {
    const array = line.split(" ");
  const result = [] 
  for (var i =0; i < array.length; i++){
      result.push(parseInt(array[i]))
      if(result[0] <=0 || result[1] >= 10){
        process.exit();
      }
    }
  
  input.push(result)

}).on('close', () => {
  let t = parseInt(input[0]);

  let result = '';
  for(let i=1; i<=t; i++){
    let A = parseInt(input[i][0]);
    let B = parseInt(input[i][1]);
    result += `Case #${i}: ${A} + ${B} = ${A+B}\n`;
//   이 부분에서 계속 안돼서 찾아보니 숫자나 문자를 변수와 결합할 때에는 초기값을 지정해줘야 함 -> let result = ' ';
//  이후 result += `Case #${i}: ${A} + ${B} = ${A+B}\n`; 백틱(`) 을 이용해서 어떻게 출력되어야 하는지 쓰고 result에 
//  Operator: x += y Meaning:  x  = x + y    
  }
  console.log(result);
  process.exit();
});
