const token = 'gUbYCm9ZQFhVciwi3NVXdc';

function fetchStockInfo() {
    const one = document.getElementById('acoes-destaque');
    one.style.display = 'none';
    const two = document.getElementById('stockInfo');
    two.style.display = 'grid';

    const ticker = document.getElementById('tickerInput').value.toUpperCase();

    if (ticker.trim() === '') {
        one.style.display = 'grid';
        two.style.display = 'none';
    } else {
        const url = `https://brapi.dev/api/quote/${ticker}?token=${token}`;
        fetch(url)
            .then(response => response.json())
            .then(data => displayStockInfo(data))
            .catch(error => console.error('Erro ao obter dados da API:', error));
        }

    
}

function displayStockInfo(data) {
    const stockInfoDiv = document.getElementById('stockInfo');
    stockInfoDiv.innerHTML = ''; // Clear previous results

    if (data.results && data.results.length > 0) {
        const stock = data.results[0];
         let cardHtml = '';

        // Verifica cada campo individualmente antes de adicioná-lo ao HTML
        if (stock.logourl) {
            cardHtml += `
                <div class="header-card">
                    <div class="img"><img src="${stock.logourl}" alt=""></div>
                    <div class="name">
                        <div class="ticker">${stock.symbol ? stock.symbol : ''}</div>
                        <div class="nameEmpresa">${stock.longName ? stock.longName : ''}</div>
                    </div>
                </div>
            `;
        }
        cardHtml+='<div id="cards-info">';

        if (stock.regularMarketPrice !== undefined && stock.regularMarketPrice !== null) {
            cardHtml += `
                <div class="card-action">
                    <div class="title">Preço Atual</div>
                    <div class="info"><img src="assets/img/valor.png" alt="">${stock.regularMarketPrice.toFixed(2)}<span>${stock.currency ? stock.currency : ''}</span></div>
                </div>
            `;
        }

        if (stock.regularMarketChangePercent !== undefined && stock.regularMarketChangePercent !== null) {
            cardHtml += `
                <div class="card-action">
                    <div class="title">Variação Percentual</div>
                    <div class="info"><img src="assets/img/variacao.png" alt=""><p>${stock.regularMarketChangePercent.toFixed(2)}%</p></div>
                </div>
            `;
        }

        if (stock.regularMarketDayLow !== undefined && stock.regularMarketDayLow !== null) {
            cardHtml += `
                <div class="card-action">
                    <div class="title">Baixa do Dia</div>
                    <div class="info"><img src="assets/img/variacao.png" alt=""><p>${stock.regularMarketDayLow.toFixed(2)}</p></div>
                </div>
            `;
        }

        if (stock.regularMarketDayHigh !== undefined && stock.regularMarketDayHigh !== null) {
            cardHtml += `
                <div class="card-action">
                    <div class="title">Alta do Dia</div>
                    <div class="info"><img src="assets/img/variacao.png" alt=""><p>${stock.regularMarketDayHigh.toFixed(2)}</p></div>
                </div>
            `;
        }

        if (stock.marketCap) {
            cardHtml += `
                <div class="card-action">
                    <div class="title">Capitalização de Mercado</div>
                    <div class="info">${stock.marketCap}</div>
                </div>
            `;
        }
        cardHtml+='</div>';
        // Adiciona o HTML ao elemento pai
        stockInfoDiv.innerHTML += cardHtml;
    } else {
        stockInfoDiv.innerHTML = '<p>Nenhum dado disponível para o ticker informado.</p>';
    }
}



function acoesDestaque(){
    const acoes = ["PETR4", "VALE3", "ABEV3", "WEGE3", "BPAC11", "BBAS3"];

    for (let i = 0; i < acoes.length; i++) {
        const ticker = acoes[i];
        const url = `https://brapi.dev/api/quote/${ticker}?token=${token}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => displayDestaquesinfo(data))
            .catch(error => console.error('Erro ao obter dados da API:', error));
    }  
}

function displayDestaquesinfo(data){
    const stockInfoDiv = document.getElementById('cards');

    if (data.results && data.results.length > 0) {
        const stock = data.results[0];
        stockInfoDiv.innerHTML += `
            <div class="card">
                <div class="header-card">
                    <div class="img"><img src="${stock.logourl?stock.logourl: ''}" alt=""></div>
                    <div class="name">
                        <div class="ticker">${stock.symbol?stock.symbol: ''}</div>
                        <div class="nameEmpresa">${stock.longName?stock.longName: ''}</div>
                        
                    </div>
                </div>
                <div class="card-info">
                    <div class="price"><img src="assets/img/valor.png" alt="">${stock.regularMarketPrice?stock.regularMarketPrice: ''}<p>${stock.currency?stock.currency: ''}</p></div>
                    <div class="variacao"><img src="assets/img/variacao.png" alt=""> ${stock.regularMarketChangePercent?stock.regularMarketChangePercent.toFixed(2): ''}%</div>
                </div>
            </div>
        `;
    } else {
        stockInfoDiv.innerHTML += '<p>Nenhum dado disponível para o ticker informado.</p>';
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const stockInfoDiv = document.getElementById('stockInfo');
    stockInfoDiv.style.display = 'none';
    acoesDestaque()
});