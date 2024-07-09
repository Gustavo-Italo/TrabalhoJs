document.addEventListener('DOMContentLoaded', () => {
    const listaCarrinho = document.getElementById('listaCarrinho');
    const totalValor = document.getElementById('totalValor');
  
    // Carrega os itens do carrinho do localStorage
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
    function renderizarCarrinho() {
      listaCarrinho.innerHTML = '';
      let total = 0;
  
      carrinho.forEach((item, index) => {
        const itemRow = document.createElement('tr');
        itemRow.innerHTML = `
          <td><img src="${item.img}" class="adm-img" alt="Imagem de ${item.marca}"></td>
          <td>${item.marca} ${item.tipo || item.sabor}</td>
          <td>${item.categoria}</td>
          <td>R$ ${item.preco.toFixed(2)}</td>
          <td>${item.quantidade}</td>
          <td><button class="btn btn-danger btn-sm" onclick="removerItem(${index})">Remover</button></td>
        `;
        listaCarrinho.appendChild(itemRow);
        total += item.preco * item.quantidade;
      });
  
      totalValor.textContent = total.toFixed(2);
    }
  
    window.removerItem = (index) => {
      carrinho.splice(index, 1);
      localStorage.setItem('carrinho', JSON.stringify(carrinho));
      renderizarCarrinho();
    };
  
    renderizarCarrinho();
  });
  