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
       console.log("Case #"+i+":");
       console.log(input[i][0] + input[i][1]);
  }

  process.exit();
});