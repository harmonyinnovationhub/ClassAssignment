//Write a JavaScript function that returns array elements larger than a number.
function bigArr(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
};
const result = [11, 45, 4, 31, 64, 10]. filter(bigArr(10));
console.log(result);
