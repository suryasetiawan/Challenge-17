export default class MesinHitung {
    constructor() {
        this.a =1 ;
    }

    add(a) {
        this.a += a;
        return this;
    }

    subtract(a) {
        this.a -= a;
        return this;
    }

    divide(a) {
        this.a /= a;
        return this;
    }

    multiply(a) {
        this.a *= a;
        return this;

    }
    square() {
        this.a = Math.pow(this.a, 2);
        return this;

    }
    exponent() {
        this.a = Math.pow(this.a, 3);
        return this;

    }
    squareRoot() {
        this.a = Math.sqrt(this.a)
        return this;

    }

    result() {
        console.log(this.a);
    }

}

