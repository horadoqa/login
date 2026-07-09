// Usuários e senhas pré-definidos
    const validUsers = {
        "usuario@example.com": "1q2w3e4r",
        "usuario2@example.com": "1q2w3e4r"
    };

    function login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("error-message");

        if (username === "" || password === "") {
            errorMessage.textContent = "E-mail e senha são obrigatórios!";
            errorMessage.classList.add("error");
            return;
        }

        if (validUsers[username] && validUsers[username] === password) {
            // Redirecionar para index2.html se as credenciais estiverem corretas
            window.location.href = "pages/welcome.html";
        } else {
            // Exibir mensagem de erro
            errorMessage.textContent = "E-mail ou senha inválidos!";
            errorMessage.classList.add("error");
        }
    }

    // Detectar a tecla Enter para enviar o formulário de login
    document.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            login();
        }
    });