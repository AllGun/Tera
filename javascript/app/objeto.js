const carro = {
  nome: "fusca",
  ano: 1967,
  cor: "azul",
  placa: "abc1011",
};

console.log(carro);
console.log(typeof carro);

// Duas formas de acessar uma propriedade de um objeto
console.log(carro.nome);

console.log(carro['nome']);

const pessoa = {
  nome: 'John',
  sobrenome: 'Doe',
  idade: 50,
  apresentar: function() {
    return this.nome + ' ' + this.sobrenome;
  }
};

pessoa.apresentar();

console.log(pessoa.apresentar());