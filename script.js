class Pipoca {
    constructor(sabor, peso, preco) {
        this.sabor = sabor;
        this.peso = peso;
        this.preco = preco;
    }
}

const pipocaCaramelizada = new Pipoca ("Pipoca Doce Caramelizada", 50, 10.50);
const pipocaAmanteigada = new Pipoca ("Pipoca Salgada Amanteigada", 50, 8.20);
const pipocaBacon = new Pipoca ("Pipoca Salgada com Bacon", 50, 12.50);
const pipocaNinho = new Pipoca ("Pipoca Doce com Ninho", 50, 12.50);

class Kit {
    constructor(nome, quantidade, preco) {
        this.nome = nome; 
        this.quantidade = quantidade; 
        this.preco = preco;
    }
}

const kitSalgadas = new Kit ("Kit de pipocas salgadas", 6, 70.80)
const kitNinho = new Kit ("Kit de pipocas Doces com Ninho", 6, 90.80)
const kitSaboresFinos = new Kit ("Kit de pipocas Salgadas com temperos finos", 6, 77.80)
const kitMisto = new Kit ("Kit de pipocas salgadas e doces tradicionais", 6, 40.80)

class Cliente {
    constructor(nome, idade, naturalidade, nascimento, email, telefone, endereco) {
        this.nome = nome;
        this.idade = idade; 
        this.naturalidade = naturalidade; 
        this.nascimento = nascimento;
        this.email = email; 
        this.telefone = telefone;
        this.endereco = endereco;
    }
}

const clienteUm = new Cliente ("Deborah", 34, "Rio de Janeiro", "30/10/1989", "deborah@gmail.com", "(21)99999-9999", "Rua dos Bobos Nº0")

const clienteDois = new Cliente ("Rodolfo", 45, "Caxias do Sul", "30/07/1979", "rodolfo@gmail.com", "(54)99999-8888", "Travessa dos Gatos Nº1")

const clienteTres = new Cliente ("Barao", 45, "Caxias do Sul", "07/04/1979", "barao@gmail.com", "(54)99999-7777", "Travessa dos Gatos Nº2")

const clienteQuatro = new Cliente ("Penelope", 38, "Caxias do Sul", "14/02/1986", "penelope@gmail.com", "(54)99999-6666", "Travessa dos Cães Nº1")

const clienteCinco = new Cliente ("Carlos Eduardo", 38, "Caxias do Sul", "17/05/1986", "dudu@gmail.com", "(54)99999-6666", "Travessa dos Cães Nº2")


//Implementação do simulador de carrinho de compras 
//Os objetos devem entrar numa lista que será o carrinho de compras 
//Temos que ter a opção de acrescentar mais itens e a opção de remover
//carrinho está vazio pois pedimos ao cliente que adicione os itens que deseja 


let carrinho = []; 
let item;

//está funcionando
function adicionar() {
    do {
        item = parseInt(prompt("Digite o número da opção que você deseja, 1 - 2 - 3 - 4. Digite 0 para sair"));
        if (item === 1) {
            item = pipocaCaramelizada
        } else if (item === 2) {
            item = pipocaAmanteigada
        } else if (item === 3) {
            item = pipocaBacon
        } else if (item === 4) {
            item = pipocaNinho
        }
        carrinho.push(item)
    } while (item !== 0);

    carrinho.splice(carrinho.length - 1, 1)
    console.log("Esses são os itens no seu carrinho de compras: ")
    for (const item of carrinho) {
        if (item !== 0) {
            console.log(item.sabor +" R$ "+ item.preco)
        }};
        totalCarrinho(carrinho)
}



//Função deletar desenvolvida pelo Gustavo Ferracioli - funcionando
function deletar() {
    if (carrinho.length === 0) {
        console.log("O carrinho está vazio");
        return;
    } 
    let itemIndex = parseInt(prompt("Digite o número do item que deseja excluir, começando do 1:"));
    if (itemIndex > 0 && itemIndex <= carrinho.length){
        let itemRemovido = carrinho.splice(itemIndex -1, 1)[0];
        console.log(`O item deletado foi: ${itemRemovido.sabor}`);
    } else {
        console.log("Item inválido.");
    }
    console.log("Itens no carrinho após a remoção:")
        for (const item of carrinho) {
            console.log(item.sabor +" R$ "+ item.preco)
    }

    totalCarrinho(carrinho)

}


//desenvolvido em conjunto com o Gustavo Italo
//Pega os precos dos itens na lista do carrinho e soma. Utilizada na função de adicionar e na de deletar.
function totalCarrinho(objeto) {
    const total = objeto.reduce((acumulador, valorAtual) => {
            return acumulador += valorAtual.preco
        }, 0);
    console.log("Valor total: R$ " + total.toFixed(2));
}


