// -1000 <= x <= 1000 x != 0
// -1000 <= y <= 1000 y != 0

// 제 1사분면은 x > 0 && y > 0
// 제 2사분면은 x < 0 && y > 0
// 제 3사분면은 x < 0 && y < 0
// 제 4사분면은 x > 0 && y < 0


function getQuadrant( x, y) {

    if ( x < -1000 || x > 1000 || x == 0) {
        return;
    }

    if ( y < -1000 || y > 1000 || y == 0) {
        return;
    }

    if (x > 0 && y > 0) {
        console.log('1');
    } else if (x < 0 && y > 0) {
        console.log('2');
    } else if (x < 0 && y < 0) {
        console.log('3');
    } else if (x > 0 && y < 0) {
        console.log('4');
    } 


}

    getQuadrant( 10, 35);
