document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    try {
        let response = await fetch('http://localhost:3001/users?email=' + email + '&password=' + password);
        let users = await response.json();

        if (users.length > 0) {
            alert('Login bem-sucedido! Bem-vindo, ' + email + '.');
            window.location.href = 'index.html';
        } else {
            alert('Email ou senha incorretos. Por favor, tente novamente.');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Ocorreu um erro ao fazer login. Por favor, tente novamente.');
    }
});
