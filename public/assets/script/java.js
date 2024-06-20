// Função para mudar o tamanho do cabeçalho ao rolar a página
function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const shrinkOn = 10; // Quantidade de scroll para encolher o cabeçalho
    const headerEl = document.querySelector('.shop-header');

    if (distanceY > shrinkOn) {
        headerEl.classList.add('small-header');
    } else {
        headerEl.classList.remove('small-header');
    }
}

// Adicionar evento de scroll para chamar a função de redimensionamento
window.addEventListener('scroll', resizeHeaderOnScroll);




// Dados dos produtos
const produtos = [
    {
        "id": 1,
        "titulo": "Produto Um",
        "descricao": "Descrição do produto um. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "imagem": "assets/img/fundo.jpg",
        "detalheAdicional": "Detalhe adicional do produto um."
    },
    {
        "id": 2,
        "titulo": "Produto Dois",
        "descricao": "Descrição do produto dois. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "imagem": "assets/img/lorem.png",
        "detalheAdicional": "Detalhe adicional do produto dois."
    },
    {
        "id": 3,
        "titulo": "Produto Três",
        "descricao": "Descrição do produto três. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "imagem": "assets/img/mulher.jpg",
        "detalheAdicional": "Detalhe adicional do produto três."
    }
];

// Função para criar um card
function createCard(item) {
    return `
        <div class="col-md-4">
            <div class="product-card">
                <img src="${item.imagem}" class="imagemproduto1" alt="${item.titulo}">
                <div class="card-body">
                    <h5 class="product-title">${item.titulo}</h5>
                    <p class="product-description">${item.descricao}</p>
                    <p class="product-description"><small class="text-muted">${item.detalheAdicional}</small></p>
                </div>
            </div>
        </div>
    `;
}

// Função para exibir os dados na página
function displayData() {
    const container = document.getElementById('data-container');
    produtos.forEach(item => {
        container.innerHTML += createCard(item);
    });
}

// Chamar a função para exibir os dados ao carregar a página
window.onload = displayData;