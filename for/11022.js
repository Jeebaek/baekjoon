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
  }
  console.log(result);
  process.exit();
});