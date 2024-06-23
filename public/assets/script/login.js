document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores do formulário
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verifica se o usuário está cadastrado
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var user = users.find(function(user) {
        return user.email === email && user.password === password;
    });

    if (user) {
        alert('Login bem-sucedido! Bem-vindo, ' + email + '.');
        // Redireciona para a página principal
        window.location.href = 'quiz.html';
    } else {
        alert('Email ou senha incorretos. Por favor, tente novamente.');
    }
});