document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio do formulário

    // Obtém os valores do formulário
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verifica se o usuário já está cadastrado
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var userExists = users.some(function (user) {
        return user.email === email;
    });

    if (userExists) {
        alert('Este email já está cadastrado. Por favor, faça login.');
    } else {
        // Adiciona o novo usuário à lista de usuários
        users.push({ email: email, password: password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Cadastro realizado com sucesso!');
        // Redireciona para a página de login
        window.location.href = 'login.html';
    }
});

