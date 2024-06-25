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

const cocaCola = new Refrigerante ("Coca Cola", "Canela", 7.50, 2);
const guaranaAntarctica = new Refrigerante ("Guaraná Antarctica", "Guaraná", 8.00, 2);
const pepsi = new Refrigerante ("Pepsi", "Canela", 7.70, 2);
const fantaUva = new Refrigerante ("Fanta", "Uva", 7.00, 2);
const fantaLaranja = new Refrigerante ("Fanta", "Laranja", 7.00, 2);
const sprite = new Refrigerante ("Sprite", "Limão", 5.00, 2);
const kuat = new Refrigerante ("Kuat", "Guaraná", 5.50, 2);


class Agua {
  constructor (marca, sabor, preco, peso) {
    this.marca = marca;
    this.sabor = sabor;
    this.preco = preco;
    this.peso = peso;
  }
}

const crystal = new Agua ("Crystal", "Mineral", 2.00, 350);
const ibira = new Agua ("Ibirá", "Mineral", 1.50, 350);
const minalba = new Agua ("Minalba", "Mineral", 1.65, 350);
const cristal = new Agua ("Cristal", "Água com gás", 2.50, 350);
const bioleve = new Agua ("Bioleve", "Água com gás", 2.75, 350);


const bebidasDisponiveis = [
  brahmaTradLata, brahmaTradLong, coronaExtraLong, antarcticaTradLata, antarcticaTradLong, spatenLong, spaten600, chacChacBranco, chacChacTinto, trapicheTinto, periquitaRose, periquitaTinto, novecentoTinto, santaHelenaRose, espumanteBrutSalton, espumanteMoscatelSalton, cocaCola, guaranaAntarctica, pepsi, fantaUva, fantaLaranja, sprite, kuat, crystal, ibira, minalba, cristal, bioleve
 ]; 

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

let carrinho = [];

 function adicionar() {
  let quantidade = bebidasDisponiveis.length
  let item;
  do {
   item = parseInt(prompt(`Digite o número da opção que você deseja de 1 a ${quantidade}, Digite 0 para sair` ));

      if (item > 0 && item <= bebidasDisponiveis.length) {
        let opcao = bebidasDisponiveis[item - 1];
          carrinho.push(opcao);
          console.log(`${opcao.marca} ${opcao.tipo ? opcao.tipo : opcao.sabor} Preço R$: ${opcao.preco}`);
      }
  } while (item !== 0);
  for (let i = 0; i < carrinho.length; i++) {
   let opcao = carrinho[i] 
    console.log(`${i + 1} ${opcao.marca} ${opcao.tipo || opcao.sabor} R$ ${opcao.preco}`);
  }
 totalCarrinho(carrinho);
}

//Função deletar desenvolvida pelo Gustavo Ferracioli - funcionando
function deletar() {
  const carrinhoVazio = carrinho.length === 0;
  carrinhoVazio ? console.log("O carrinho está vazio") : removerItem();

  function removerItem() {
    let itemIndex = parseInt(prompt("Digite o número do item que deseja excluir, começando do 1:"));
    const indexValido = itemIndex > 0 && itemIndex <= carrinho.length;
    indexValido ? removerEExibirItem(itemIndex) : console.log("Item inválido.");
  }

  function removerEExibirItem(itemIndex) {
    let itemRemovido = carrinho.splice(itemIndex - 1, 1)[0];
    console.log(`O item deletado foi: ${itemRemovido.marca} ${itemRemovido.tipo || itemRemovido.sabor} R$ ${itemRemovido.preco}`);
    exibirCarrinhoAtualizado();
  }

  function exibirCarrinhoAtualizado() {
    console.log("Itens no carrinho após a remoção:");
    for (const item of carrinho) {
      console.log(`${item.marca} ${item.tipo || item.sabor} R$ ${item.preco}`);
    }
    totalCarrinho(carrinho);
  }
}

//desenvolvido em conjunto com o Gustavo Italo
//Pega os precos dos itens na lista do carrinho e soma. Utilizada na função de adicionar e na de deletar.
function totalCarrinho(objeto) {
  const total = objeto.reduce((acumulador, valorAtual) => {
    return (acumulador += valorAtual.preco);
  }, 0);
  console.log("Valor total: R$ " + total.toFixed(2));
}

 // new Cerveja ("Brahma", "Brasil", "Pilsen", 3.10, 350),
  // new Cerveja ("Brahma", "Brasil", "Pilsen", 4.79, 355),
  // new Cerveja ("Corona", "México", "American Lager", 5.99, 330),
  // new Cerveja ("Artarctica", "Brasil", "Pilsen", 3.10, 350),
  // new Cerveja ("Antarctica", "Brasil", "Pilsen", 4.79, 355),
  // new Cerveja ("Spaten", "Alemanha", "Munich Helles", 5.99, 355),
  // new Cerveja ("Spaten", "Alemanha", "Munich Helles", 8.89, 600),
  // new Vinho ("Chac Chac", "Argentina", "Tinto Malbec", 40.99, 750),
  // new Vinho ("Chac Chac", "Argentina", "Sauvignon Blanc", 40.99, 750),
  // new Vinho ("Trapiche", "Argentina", "Tinto Merlot", 51.99, 750),
  // new Vinho ("Periquita", "Portugal", "Rosé Touriga Nacional", 69.99, 750),
  // new Vinho ("Periquita", "Portugal", "Tinto Seco", 79.99, 750),
  // new Vinho ("Concha Y Toro", "Chile", "Tinto Carménère Reservado", 35.99, 750),
  // new Vinho ("Santa Helena", "Chile", "Rosé Reservado Cabernet Sauvignon", 41.19, 750),
  // new Vinho ("Salton", "Brasil", "Espumante Brut", 43.99, 750),
  // new Vinho ("Salton", "Brasil", "Espumante Moscatel", 43.99, 750),
  // new Refrigerante ("Coca Cola", "Canela", 7.50, 2),
  // new Refrigerante ("Guaraná Antarctica", "Guaraná", 8.00, 2),
  // new Refrigerante ("Pepsi", "Canela", 7.70, 2),
  // new Refrigerante ("Fanta", "Uva", 7.00, 2),
  // new Refrigerante ("Fanta", "Laranja", 7.00, 2),
  // new Refrigerante ("Sprite", "Limão", 5.00, 2),
  // new Refrigerante ("Kuat", "Guaraná", 5.50, 2),
  // new Agua ("Crystal", "Mineral", 2.00, 350),
  // new Agua ("Ibirá", "Mineral", 1.50, 350),
  // new Agua ("Minalba", "Mineral", 1.65, 350),
  // new Agua ("Cristal", "Água com gás", 2.50, 350),
  // new Agua ("Bioleve", "Água com gás", 2.75, 350)

  //Implementação do simulador de carrinho de compras
//Os objetos devem entrar numa lista que será o carrinho de compras
//Temos que ter a opção de acrescentar mais itens e a opção de remover
//carrinho está vazio pois pedimos ao cliente que adicione os itens que deseja

// let carrinho = [];
// let item;

//está funcionando
//  function adicionar() {
//    do {
//     item = parseInt(
//        prompt(
//          "Digite o número da opção que você deseja (1-27) Digite 0 para sair"
//        )
//      );
//      if (item === 1) {
//        item = pipocaCaramelizada;
//      } else if (item === 2) {
//        item = pipocaAmanteigada;
//      } else if (item === 3) {
//        item = pipocaBacon;
//      } else if (item === 4) {
//        item = pipocaNinho;
//      }
//      carrinho.push(item);
//    } while (item !== 0);

//    carrinho.splice(carrinho.length - 1, 1);
//    console.log("Esses são os itens no seu carrinho de compras: ");
//    for (const item of carrinho) {
//      if (item !== 0) {
//        console.log(item.sabor + " R$ " + item.preco);
//      }
//    }
//   totalCarrinho(carrinho);
//  }