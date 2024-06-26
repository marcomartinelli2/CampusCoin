document.getElementById('registerForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    try {
        let response = await fetch('http://localhost:3001/users?email=' + email);
        let users = await response.json();

        if (users.length > 0) {
            alert('Este email já está cadastrado. Por favor, faça login.');
        } else {
            let newUser = { email: email, password: password };
            await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'login.html'; // Redireciona para a página de login
        }
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        alert('Ocorreu um erro ao cadastrar. Por favor, tente novamente.');
    }
});
