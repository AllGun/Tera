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

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 7;

console.log(numbers);

numbers[1] = 6;

console.log(numbers);

numbers[2] = 5;

console.log(numbers);

numbers[3] = "four";
console.log(numbers);

numbers[4] = 3;
console.log(numbers);

//Criar um array q receba o valor de livros

const books = ['Roube como um artista', 'O mundo de Sofia', 'No reino dos astrônomos cegos', 'Projeto Fênix'];
console.log(books);