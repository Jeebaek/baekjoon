
// 자연수 N이 주어졌을 때, N부터 1까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.
// 첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.
// 첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

//앞에서 한 N찍기 문제에서 반대로 결과가 나오도록 해야함->그렇기 위해서는 n값에서 1씩 감소하는 반복문을 만들어야한다
//n의 조건은 (1000,000 >= 0)

function getNumber(n) {
    if (n < 1 || n > 100000) {
      return;
    }
  
    var arrNumber = new Array();
  
    for (var i = n; i > 0; i--) {
      arrNumber[i] = i;
    }
  
    for (var i = n; i > 0; i--) {
      console.log(arrNumber[i]);
    }
  }
  
    getNumber();