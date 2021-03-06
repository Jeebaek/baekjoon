// 조건 (0 ≤ H ≤ 23, 0 ≤ M ≤ 59)
// 상근이가 알람 시각을 설정하면 -> 창영이의 방법을 사용해서 언제로 고쳐야 하는지 구하는 프로그램
// 예를들어 상근이가 9 : 00 로 알람 시각을 설정하면 -> 8 : 15 로 나와야함
 

// 45분까지는
// 시간 -1
// 분 +15분

// 45분부터는
// 시간 -0
// 분 -45분

// 8시일때
// 7시 15분에 알람

// 8시 5분일때
// 7시 20분에 알람

// 8시 10분일때
// 7시 25분에 알람

// 8시 15분일때
// 7시 30분에 알람

// 8시 20분일때
// 7시 35분에 알람

// 8시 25분일때
// 7시 40분에 알람

// 8시 30분일때
// 7시 45분에 알람

// 8시 35분일때
// 7시 50분에 알람

// 8시 40분일때
// 7시 55분에 알람

// 8시부터 8시 44분까지
// -------------- h -1 m +15
// 8시
// 8시 45분일때
// 8시에 알람

// 8시 50분일때
// 8시 5분에 알람

// 8시 55분일때
// 8시 10분에 알람

// 8시 45분부터 8시 59분까지
// ---------------- h 0 m -45


// (m >= 45 && m <= 59) console.log( h ':' m-45 )
// (m >= 0 && m <= 44) console.log( h-1 ':' m+15)

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = []
rl.on("line", (line) => { 
  input = line.split(" ");
    
    let H = parseInt(input[0]);
    let M = parseInt(input[1]);
    
    if (H < 0 || H > 23) 
         process.exit();
  
    if (M < 0 || M > 59) 
        process.exit();
  
  
    if ((H >= 0 && H <= 23) && (M >= 45 && M <= 59)) {
      let minus = M - 45;
      console.log(H + " " + minus);
    } else if ((H > 0 && H <= 23) && (M >= 0 && M <= 44)) {
      let add = M + 15;
      let minus1 = H - 1;
      console.log(minus1 + " " + add);
    } else if (H === 0 && (M >= 45 && M <= 59)) {
      let minus2 = M - 45;
      console.log( H + " " + minus2);
    } else if (H === 0 && M >= 0 && M <= 44) {
      let add1 = M + 15;
      console.log(23 + " " + add1);
    }
}).on("close", () => {
    

    process.exit();
    
});
