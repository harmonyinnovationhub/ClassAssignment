function calcGeometry(radius) {
  const circumference = Math.PI * 2*radius;
  console.log("The circumference is " + circumference);
  const area = Math.PI * radius*radius;
  console.log("The area is " + area);
}
console.log(calcGeometry(10));
