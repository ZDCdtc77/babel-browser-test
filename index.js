/**
 * Created by zhangyilin on 2018/6/26.
 */
class Calc {
    constructor() {
        console.log('Calc constructor');
    }
    add(a, b) {
        return a + b;
    }
}

var c = new Calc();
console.log(c.add(4,5));