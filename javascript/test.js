
let numbers = [[3,5,9], 4, 6, 7, 90, 20];
numbers[2] = 30;
numbers.push(567);
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] + ".");
}

function multiply(a,b) {
  return a*b;
}
console.log(multiply(4,7));

const person = {
  name: "AOWLAD",
  age: 20,
  height: 5.76,
  skills: ["html", "css", "javascript", "wordpress", "shopify"]
}
const favouriteSports = "MMA";
console.log(person.name + " " + person.age + " " + person.skills[2]);
console.log(person['height']);



