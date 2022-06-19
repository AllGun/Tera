console.log("Hello world na Tera!");

/* 
Declarando uma variável
    var nomeDaVariavel = valor;
        var: indica o tipo de atribuição.
        nomeDaVariável: indica o nome daquela variável.
        = Sinal de Atribuição
        valor: valor que será atribuído àquela variável.
*/
var a = 5; //  Aqui estamos declarando uma variável chamada "a" e atribuindo o valor de 5 a ela.

/*
Tipos de Dados
    As variáveis em JavaScript podem armazenar números ou valores em texto. 
        Os valores em texto são chamados de Strings.
            As strings são escritas entre aspas simples ou aspas duplas.
        Os números são escritos sem aspas.
            Se vc escrever um número entre aspas ele se tornará uma String.
*/
var nome = "Alfredo";
var sobrenome = "Gutemberg";
var idade = 36;
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);

/*
Sensibilidade à caracteres maiúsculos
    JavaScript é uma linguagem "case sensitive", ou seja, sensível a caracteres maiúsculos.
        As variáveis nome e Nome, idade e Idade são variáveis diferentes. 
*/
var Nome = "Eva Cristina";
var Sobrenome = "da Silva";
var Idade = 26;
console.log(`Nome: ${Nome}`);
console.log(`Idade: ${Idade}`);

/*
É possível realizar operações matemáticas com variáveis que contém números.
*/
var number1 = 5;
var number2 = 6;
var total = number1 + number2;
console.log(`${number1} + ${number2} = ${total}`);


/*
Operadores de comparação 
    comparam dois valores e retornam um valor booleano. 
        "true" (verdadeira)  ou "false" (falsa).
 */
var b;

// false
b = 8 > 8;
console.log(b);

// true
b = 8 >= 8;
console.log(b);

// false
b = 8 < 8;
console.log(b);

// true
b = 7 < 13;
console.log(b);

// true
b = 10 <= 15;
console.log(b);

console.log(7 === 7);
console.log(9 == 9);
console.log(3 === "3");
console.log(2 == "2");

console.log(5 !== 5);
console.log(5 !== "5");


