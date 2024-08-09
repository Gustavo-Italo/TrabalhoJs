function gerarCards(categoria = '') {
  const produtosContainer = document.querySelector('.produtos');
  produtosContainer.innerHTML = '';

  // Filtrar os produtos conforme a categoria selecionada
  const produtosFiltrados = bebidasDisponiveis.filter(bebida => categoria === '' || bebida.categoria === categoria);

  produtosFiltrados.forEach((bebida) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '14rem';

    const img = document.createElement('img');
    img.className = 'img-card';
    img.src = bebida.img;
    img.alt = `Imagem de ${bebida.marca} ${bebida.tipo || bebida.sabor}`;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = `${bebida.marca} ${bebida.tipo || bebida.sabor} R$ ${bebida.preco}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '-';
    deleteButton.className = 'card-button';
    deleteButton.onclick = () => {
      deletarItemDoCarrinho(bebida);
      atualizarContador(cardBody, bebida.qnt);
    };

    const contador = document.createElement('p');
    contador.className = 'contador';
    contador.textContent = bebida.qnt || 0;

    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.className = 'card-button';
    addButton.onclick = () => {
      adicionarItemAoCarrinho(bebida);
      atualizarContador(cardBody, bebida.qnt);
    };

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(deleteButton);
    cardBody.appendChild(contador);
    cardBody.appendChild(addButton);

    card.appendChild(img);
    card.appendChild(cardBody);

    produtosContainer.appendChild(card);
  });
}

function adicionarItemAoCarrinho(bebida) {
  bebida.qnt = (bebida.qnt || 0) + 1;

  const itemExistente = carrinho.find(carrinhoItem => 
    carrinhoItem.marca === bebida.marca && 
    carrinhoItem.tipo === bebida.tipo && 
    carrinhoItem.sabor === bebida.sabor
  );

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    bebida.quantidade = 1;
    carrinho.push(bebida);
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  atualizarCarrinho();
}

function deletarItemDoCarrinho(bebida) {
  const itemIndex = carrinho.findIndex(carrinhoItem => 
    carrinhoItem.marca === bebida.marca && 
    carrinhoItem.tipo === bebida.tipo && 
    carrinhoItem.sabor === bebida.sabor
  );

  if (itemIndex !== -1) {
    carrinho[itemIndex].quantidade -= 1;
    bebida.qnt -= 1; // Reduz a quantidade também no item atual
    if (carrinho[itemIndex].quantidade <= 0) {
      carrinho.splice(itemIndex, 1);
    }
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
  }
}

function atualizarContador(cardBody, quantidade) {
  const contador = cardBody.querySelector('.contador');
  contador.textContent = quantidade || 0;
}

function atualizarCarrinho() {
  console.log("Itens no carrinho:");
  carrinho.forEach(item => {
    console.log(`${item.marca} ${item.tipo || item.sabor} R$ ${item.preco}`);
  });
  totalCarrinho(carrinho);
}

function totalCarrinho(objeto) {
  const total = objeto.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco * valorAtual.quantidade, 0);
  console.log("Valor total: R$ " + total.toFixed(2));
  document.getElementById('valor-total').textContent = "Valor Total: R$ " + total.toFixed(2);
}

// Função de filtragem
document.getElementById('categoria-cerveja').addEventListener('click', () => filtrarCategoria('cerveja'));
document.getElementById('categoria-vinho').addEventListener('click', () => filtrarCategoria('vinho'));
document.getElementById('categoria-refrigerante').addEventListener('click', () => filtrarCategoria('refrigerante'));
document.getElementById('categoria-agua').addEventListener('click', () => filtrarCategoria('agua'));
document.getElementById('categoria-todas').addEventListener('click', () => filtrarCategoria(''));

function filtrarCategoria(categoria) {
    gerarCards(categoria);
}

gerarCards();
