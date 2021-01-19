
// 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
// 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.
// 첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

//앞에서 한 N찍기 문제에서 반대로 결과가 나오도록 해야함->그렇기 위해서는 n값에서 1씩 감소하는 반복문을 만들어야한다
//n의 조건은 (1000,000 >= 0)

let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = '';

if (input < 1 || input > 100000)
     process.exit();
 
for (let i = input; i >= 1; i--) {
    answer += i + "\n";
}

console.log(answer);

// readline으로 풀려고 했으나 시간초과로 계속 실패해서 검색 후 fs 모듈 이용해서 풀었음 -> 이 문제 이용하여 N찍기 풀음
