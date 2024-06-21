class Cerveja {
  constructor(marca, origem, tipo, preco, peso) {
    this.marca = marca;
    this.origem = origem;
    this.tipo = tipo;
    this.preco = preco;
    this.peso = peso;
  }
}

const brahmaTradLata = new Cerveja ("Brahma", "Brasil", "Pilsen", 3.10, 350);
const brahmaTradLong = new Cerveja ("Brahma", "Brasil", "Pilsen", 4.79, 355);
const coronaExtraLong = new Cerveja ("Corona", "México", "American Lager", 5.99, 330);
const antarcticaTradLata = new Cerveja ("Artarctica", "Brasil", "Pilsen", 3.10, 350);
const antarcticaTradLong = new Cerveja ("Antarctica", "Brasil", "Pilsen", 4.79, 355);
const spatenLong = new Cerveja ("Spaten", "Alemanha", "Munich Helles", 5.99, 355);
const spaten600 = new Cerveja ("Spaten", "Alemanha", "Munich Helles", 8.89, 600);

class Vinho {
  constructor (marca, origem, tipo, preco, peso) {
    this.marca = marca;
    this.origem = origem;
    this.tipo = tipo;
    this.preco = preco;
    this.peso = peso;
  }
}

const chacChacTinto = new Vinho ("Chac Chac", "Argentina", "Tinto Malbec", 40.99, 750);
const chacChacBranco = new Vinho ("Chac Chac", "Argentina", "Sauvignon Blanc", 40.99, 750);
const trapicheTinto = new Vinho ("Trapiche", "Argentina", "Tinto Merlot", 51.99, 750);
const periquitaRose = new Vinho ("Periquita", "Portugal", "Rosé Touriga Nacional", 69.99, 750);
const periquitaTinto = new Vinho ("Periquita", "Portugal", "Tinto Seco", 79.99, 750);
const novecentoTinto = new Vinho ("Concha Y Toro", "Chile", "Tinto Carménère Reservado", 35.99, 750); 
const santaHelenaRose = new Vinho ("Santa Helena", "Chile", "Rosé Reservado Cabernet Sauvignon", 41.19, 750);
const espumanteBrutSalton = new Vinho ("Salton", "Brasil", "Espumante Brut", 43.99, 750);
const espumanteMoscatelSalton = new Vinho ("Salton", "Brasil", "Espumante Moscatel", 43.99, 750);

class Refrigerante {
  constructor (marca, sabor, preco, peso) {
    this.marca = marca;
    this.sabor = sabor;
    this.preco = preco;
    this.peso = peso;
  }
}

class Agua {
  constructor (marca, sabor, preco, peso) {
    this.marca = marca;
    this.sabor = sabor;
    this.preco = preco;
    this.peso = peso;
  }
}

class Cliente {
  constructor(
    nome,
    idade,
    naturalidade,
    nascimento,
    email,
    telefone,
    endereco
  ) {
    this.nome = nome;
    this.idade = idade;
    this.naturalidade = naturalidade;
    this.nascimento = nascimento;
    this.email = email;
    this.telefone = telefone;
    this.endereco = endereco;
  }
}

const clienteUm = new Cliente(
  "Deborah",
  34,
  "Rio de Janeiro",
  "30/10/1989",
  "deborah@gmail.com",
  "(21)99999-9999",
  "Rua dos Bobos Nº0"
);

const clienteDois = new Cliente(
  "Rodolfo Francisco",
  45,
  "Caxias do Sul",
  "30/07/1979",
  "rodolfo@gmail.com",
  "(54)99999-8888",
  "Travessa dos Gatos Nº1"
);

const clienteTres = new Cliente(
  "Barao",
  45,
  "Caxias do Sul",
  "07/04/1979",
  "barao@gmail.com",
  "(54)99999-7777",
  "Travessa dos Gatos Nº2"
);

const clienteQuatro = new Cliente(
  "Penelope Camila",
  38,
  "Caxias do Sul",
  "14/02/1986",
  "penelope@gmail.com",
  "(54)99999-6666",
  "Travessa dos Cães Nº1"
);

const clienteCinco = new Cliente(
  "Carlos Eduardo",
  38,
  "Caxias do Sul",
  "17/05/1986",
  "dudu@gmail.com",
  "(54)99999-6666",
  "Travessa dos Cães Nº2"
);

//Implementação do simulador de carrinho de compras
//Os objetos devem entrar numa lista que será o carrinho de compras
//Temos que ter a opção de acrescentar mais itens e a opção de remover
//carrinho está vazio pois pedimos ao cliente que adicione os itens que deseja

let carrinho = [];
let item;

//está funcionando
function adicionar() {
  do {
    item = parseInt(
      prompt(
        "Digite o número da opção que você deseja, 1 - 2 - 3 - 4. Digite 0 para sair"
      )
    );
    if (item === 1) {
      item = pipocaCaramelizada;
    } else if (item === 2) {
      item = pipocaAmanteigada;
    } else if (item === 3) {
      item = pipocaBacon;
    } else if (item === 4) {
      item = pipocaNinho;
    }
    carrinho.push(item);
  } while (item !== 0);

  carrinho.splice(carrinho.length - 1, 1);
  console.log("Esses são os itens no seu carrinho de compras: ");
  for (const item of carrinho) {
    if (item !== 0) {
      console.log(item.sabor + " R$ " + item.preco);
    }
  }
  totalCarrinho(carrinho);
}

//Função deletar desenvolvida pelo Gustavo Ferracioli - funcionando
function deletar() {
  if (carrinho.length === 0) {
    console.log("O carrinho está vazio");
    return;
  }
  let itemIndex = parseInt(
    prompt("Digite o número do item que deseja excluir, começando do 1:")
  );
  if (itemIndex > 0 && itemIndex <= carrinho.length) {
    let itemRemovido = carrinho.splice(itemIndex - 1, 1)[0];
    console.log(`O item deletado foi: ${itemRemovido.sabor}`);
  } else {
    console.log("Item inválido.");
  }
  console.log("Itens no carrinho após a remoção:");
  for (const item of carrinho) {
    console.log(item.sabor + " R$ " + item.preco);
  }

  totalCarrinho(carrinho);
}

//desenvolvido em conjunto com o Gustavo Italo
//Pega os precos dos itens na lista do carrinho e soma. Utilizada na função de adicionar e na de deletar.
function totalCarrinho(objeto) {
  const total = objeto.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco);
  }, 0);
  console.log("Valor total: R$ " + total.toFixed(2));
}

const teste = [2, 4, 6, 2, 7, 8, 9, 59, 292];
console.log(Math.max(...teste));

let umnumero = 0.1;
let otonumero = 0.2;

let soma = umnumero + otonumero;

console.log(soma);
