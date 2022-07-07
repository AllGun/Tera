let mList = [1, 2, 3];

for (let index = 0; index < mList.length; index++ ) {
// mList.push(index);
console.log(mList);
}

console.log(mList);

class Produto {
    constructor(name, price, description, qtd) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.qtd = qtd;
    }
}

const produto1 = new Produto();
console.log(produto1);


produto1.name = "Macarrão";
produto1.value = 3;
produto1.description = "Macarrão do tipo italiano";
produto1.qtd = 1;

console.log(produto1);

const produto2 = new Produto("Arroz", 20, "Arroz Tio Jorge", 4);
console.log(produto2);
