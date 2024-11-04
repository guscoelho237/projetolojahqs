document.addEventListener('DOMContentLoaded', () => {
    const estrelas = document.querySelectorAll('.estrela');
    const inputAvaliacao = document.getElementById('avaliacao');

    estrelas.forEach(estrela => {
        estrela.addEventListener('click', () => {
            const value = estrela.dataset.value;
            inputAvaliacao.value = value;

            // Remover a classe 'selected' de todas as estrelas
            estrelas.forEach(e => e.classList.remove('selected'));

            // Adicionar a classe 'selected' às estrelas selecionadas
            for (let i = 0; i < value; i++) {
                estrelas[i].classList.add('selected');
            }
        });
    });

    document.getElementById('form-depoimento').addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const avaliacao = inputAvaliacao.value;
        const comentario = document.getElementById('comentario').value;

        const depoimentoContainer = document.getElementById('depoimentos-container');
        const novoDepoimento = document.createElement('div');
        novoDepoimento.classList.add('depoimento');
        novoDepoimento.innerHTML = `<strong>${nome}:</strong> <span>${'★'.repeat(avaliacao)}${'☆'.repeat(5 - avaliacao)}</span> "${comentario}"`;
        depoimentoContainer.appendChild(novoDepoimento);

        // Limpar o formulário
        document.getElementById('form-depoimento').reset();
        inputAvaliacao.value = 0;
        estrelas.forEach(e => e.classList.remove('selected'));
    });
});
