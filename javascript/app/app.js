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

/*
Sensibilidade à caracteres maiúsculos
    JavaScript é uma linguagem "case sensitive", ou seja, sensível a caracteres maiúsculos.
        As variáveis nome e Nome, idade e Idade são variáveis diferentes. 
*/
var Nome = "Eva Cristina";
var Sobrenome = "da Silva";
var Idade = 26;




console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);

console.log(`Nome: ${Nome}`);
console.log(`Idade: ${Idade}`);

console.log(Idade + idade);