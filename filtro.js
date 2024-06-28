document.getElementById('categoria-cerveja').addEventListener('click', () => filtrarCategoria('Cerveja'));
document.getElementById('categoria-vinho').addEventListener('click', () => filtrarCategoria('Vinho'));
document.getElementById('categoria-refrigerante').addEventListener('click', () => filtrarCategoria('Refrigerante'));
document.getElementById('categoria-agua').addEventListener('click', () => filtrarCategoria('Água'));

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
        default:
            categoriaClasse = '';
    }
    gerarCards(categoriaClasse);
}

gerarCards();