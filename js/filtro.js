
// gerarCards();
gerarCards();
document.getElementById('categoria-cerveja').addEventListener('click', () => filtrarCategoria('cerveja'));
document.getElementById('categoria-vinho').addEventListener('click', () => filtrarCategoria('vinho'));
document.getElementById('categoria-refrigerante').addEventListener('click', () => filtrarCategoria('refrigerante'));
document.getElementById('categoria-agua').addEventListener('click', () => filtrarCategoria('agua'));
document.getElementById('categoria-todas').addEventListener('click', () => filtrarCategoria(''));

function filtrarCategoria(categoria) {
    gerarCards(categoria);
}

