const reducer = [3, 5, 7, 9, 11];
const reduced = reducer.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;ss
});
console.log(reduced);