// -1000 <= x <= 1000 x != 0
// -1000 <= y <= 1000 y != 0

// 제 1사분면은 x > 0 && y > 0
// 제 2사분면은 x < 0 && y > 0
// 제 3사분면은 x < 0 && y < 0
// 제 4사분면은 x > 0 && y < 0


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

    
let input = []
rl.on("line", (line) => { 
    input.push(line);
    
    let x = parseInt(input[0]);
    let y = parseInt(input[1]);

    if ( x < -1000 || x > 1000 || x == 0) 
        process.exit();
  

    if ( y < -1000 || y > 1000 || y == 0)
        process.exit();
  

    if (x > 0 && y > 0) {
        console.log("1");
    } else if (x < 0 && y > 0) {
        console.log("2");
    } else if (x < 0 && y < 0) {
        console.log("3");
    } else if (x > 0 && y < 0) {
        console.log("4");
    } 
}).on("close", () => {
    

    process.exit();
    
});
