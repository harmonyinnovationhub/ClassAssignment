//filter method returns an array after excuting the operation specified within the function. the odd numbers are returned in this example.
let num = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const oddNum = num.filter(n => {
    return n % 2 === 1;
});
console.log(oddNum);