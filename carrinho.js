// Carrinho inicial vazio
let carrinho = [];

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(produto) {
    const itemCarrinho = carrinho.find(item => item.id === produto.id && item.formato === produto.formato);
    
    if (itemCarrinho) {
        itemCarrinho.quantidade++;
    } else {
        carrinho.push({ ...produto, quantidade: 1 });
    }
    atualizarCarrinho();
}

// Função para atualizar o carrinho na tela
function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total');

    itensCarrinho.innerHTML = ""; // Limpa itens do carrinho
    let total = 0;

    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
    } else {
        carrinho.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item-carrinho');
            itemDiv.innerHTML = `
                <h3>${item.nome} (${item.formato})</h3>
                <p>R$ ${item.preco.toFixed(2)} x ${item.quantidade}</p>
                <button onclick="removerDoCarrinho(${item.id}, '${item.formato}')">Remover</button>
            `;
            itensCarrinho.appendChild(itemDiv);
            total += item.preco * item.quantidade;
        });
    }

    totalElement.innerText = total.toFixed(2);
}

// Função para remover item do carrinho
function removerDoCarrinho(id, formato) {
    const itemIndex = carrinho.findIndex(item => item.id === id && item.formato === formato);
    
    if (itemIndex !== -1) {
        if (carrinho[itemIndex].quantidade > 1) {
            carrinho[itemIndex].quantidade--; // Diminui a quantidade se for maior que 1
        } else {
            carrinho.splice(itemIndex, 1); // Remove o item se a quantidade for 1
        }
    }

    atualizarCarrinho();
}

// Exemplo de como adicionar produtos ao carrinho
function adicionarProdutoExemplo() {
    const produto = { id: 1, nome: "HQ do Batman", preco: 49.99, formato: "fisico" }; // Exemplo de produto
    adicionarAoCarrinho(produto);
}

// Adiciona um produto de exemplo ao carregar a página
document.addEventListener('DOMContentLoaded', adicionarProdutoExemplo);
