const zero = (a) => (a ? `${0}${a}` : 0);
const one = (a) => (a ? `${1}${a}` : 1);
const two = (a) => (a ? `${2}${a}` : 2);
const three = (a) => (a ? `${3}${a}` : 3);
const four = (a) => (a ? `${4}${a}` : 4);
const five = (a) => (a ? `${5}${a}` : 5);
const six = (a) => (a ? `${6}${a}` : 6);
const seven = (a) => (a ? `${7}${a}` : 7);
const eight = (a) => (a ? `${8}${a}` : 8);
const nine = (a) => (a ? `${9}${a}` : 9);

const plus = (a) => `+${a}`;
const minus = (a) => `-${a}`;
const dividedBy = (a) => `/${a}`;
const times = (a) => `*${a}`;

console.log(eval(seven(times(seven()))));
