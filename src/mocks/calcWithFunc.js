const zero = (a) => a?Math.trunc(eval(`${0}${a}`)):0;
const one  = (a) => a?Math.trunc(eval(`${1}${a}`)):1;
const two  = (a) => a?Math.trunc(eval(`${2}${a}`)):2;
const three  = (a) => a?Math.trunc(eval(`${3}${a}`)):3;
const four  = (a) => a?Math.trunc(eval(`${4}${a}`)):4;
const five  = (a) => a?Math.trunc(eval(`${5}${a}`)):5;
const six  = (a) => a?Math.trunc(eval(`${6}${a}`)):6;
const seven  = (a) => a?Math.trunc(eval(`${7}${a}`)):7;
const eight  = (a) => a?Math.trunc(eval(`${8}${a}`)):8;
const nine  = (a) => a?Math.trunc(eval(`${9}${a}`)):9;

const plus = (a) => `+${a}`;
const minus = (a) =>`-${a}`;
const dividedBy = (a) => `/${a}`;
const times = (a) => `*${a}`;

console.log(seven(times(seven())));
// 7*7 = 49
