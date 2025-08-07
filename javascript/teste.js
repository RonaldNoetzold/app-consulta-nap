// Exemplo de dados vindos do backend
const clientes = [
    { nome: 'CARMEM S.B.', status: 'online' },
    { nome: 'JOAO P.M.', status: 'offline' },
    { nome: 'MARIA C.S.', status: 'online' }
];

const listaElemento = document.querySelector('.client-list');

clientes.forEach(cliente => {
    const li = document.createElement('li');
    li.classList.add('client-item');

    li.innerHTML = `
        <span class="client-name">${cliente.nome}</span>
        <span class="client-status ${cliente.status}">${cliente.status.toUpperCase()}</span>
        <button class="details-button">
            <i class="fas fa-info-circle"></i>
        </button>
    `;

    // Adicione um evento de clique ao botão para buscar os detalhes
    const detailsButton = li.querySelector('.details-button');
    detailsButton.addEventListener('click', () => {
        alert(`Buscando detalhes do cliente: ${cliente.nome}`);
        // Aqui você chamaria a função que busca os detalhes no backend
    });

    listaElemento.appendChild(li);
});