// 첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.
// 각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

// 처음에 T의 조건을 써주고, 그다음 A와 B의 조건을 적어줘야 한다
// 원하는 결과 (A+B가 T번 되도록..) (T,A,B)
// (T         
// A B         (A+B   
// A B          A+B   
// A B)  ->     A+B)


function getNumber(T, A, B) {
    if (T > 1000000) {
      return;
    }
  
    if (A < 1 || A > 1000) {
      return;
    }
  
    if (B < 1 || B > 1000) {
      return;
    }
  
  
    var array = [];
    var array = array.push(A+B);
    array.split(" ");{
  
    }
  
    for (var i = 1; i <= T; i++) {
      console.log(A + B);
    }
  }
  
  }
  
  getNumber(2, 5, 3);
  