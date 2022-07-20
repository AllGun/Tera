//Adicionando um item ao final da lista

var fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);

var addItem = fruits.push("Pear"); // print item index index =

console.log(addItem);
console.log(fruits);

console.log(fruits.length);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Apple");
console.log(fruits);

console.log(fruits);

fruits.splice(1);
console.log(fruits);
console.log(fruits.splice(0));
