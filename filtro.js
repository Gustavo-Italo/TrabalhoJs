document.getElementById('categoria-cerveja').addEventListener('click', () => filtrarCategoria('Cerveja'));
document.getElementById('categoria-vinho').addEventListener('click', () => filtrarCategoria('Vinho'));
document.getElementById('categoria-refrigerante').addEventListener('click', () => filtrarCategoria('Refrigerante'));
document.getElementById('categoria-agua').addEventListener('click', () => filtrarCategoria('Água'));
document.getElementById('categoria-todas').addEventListener('click', () => filtrarCategoria('Todas'))

function filtrarCategoria(categoria) {
    let categoriaClasse;
    switch (categoria) {
        case 'Cerveja':
            categoriaClasse = 'Cerveja';
            break;
        case 'Vinho':
            categoriaClasse = 'Vinho';
            break;
        case 'Refrigerante':
            categoriaClasse = 'Refrigerante';
            break;
        case 'Água':
            categoriaClasse = 'Agua';
            break;
        case 'Todas':
            categoriaClasse = '';
            break;
        default:
            categoriaClasse = '';
    }
    gerarCards(categoriaClasse);
}

gerarCards();

// function filterProducts(produtos, categoria) {
//     if (!categoria) {
//       return produtos; // Retorna todos os produtos se a categoria estiver vazia
//     }
//     return produtos.filter(produto => 
//       produto.categoria.toLowerCase().includes(categoria.toLowerCase())
//     );
//   }
  