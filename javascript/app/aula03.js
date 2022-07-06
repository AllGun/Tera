console.log("Hello f* World!");

let operador = "*";
let number1 = 5,
  number2 = 6;

switch (operador) {
  case "-":
    console.log(`Resultado de  ${number1} - ${number2} = ${number1 - number2}`);
    break;
  case "+":
    console.log(`Resultado de ${number1} + ${number2} = ${number1 + number2}`);
  default:
    console.log("Operador não encontrado");
}

let count = 0;

function imparOuPar(number) {
  
  if ((number % 2) == 0){
      console.log("Par");
  } else {
      console.log("Ímpar");
  }

  
}

imparOuPar(10);
imparOuPar(11);