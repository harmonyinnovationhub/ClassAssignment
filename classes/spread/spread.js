//the spread syntax treats each value of an array or object as separate arguments. the math.max method will return NaN in the example below except the spread syntax is used.

const num = [1, 54, 32, 100, 10, 4335];
console.log(Math.max(num));
console.log(Math.max(...num));

