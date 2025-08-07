document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            fetch('../../app/php/validateLdap.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'ok') {
                    window.location.href = 'consulta.html';
                } else {
                    alert(data.mensagem);
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Ocorreu um erro ao tentar fazer login. Contate o suporte.');
            });
        });
    }
});
