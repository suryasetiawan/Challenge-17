import MesinHitung from './MesinHitung'

let Pi = 22/7;
var mh = new MesinHitung();
mh.add(10).subtract(5).result();
mh.add(3).multiply(4).divide(6).result();
mh.a = 7;
console.log(`nilai sekarang : ${mh.a}`);
mh.multiply(2).multiply(Pi).result();
mh.a = 7;
mh.square().multiply(Pi).result();
mh.a = 4;
mh.exponent(3).result();
mh.squareRoot().result();