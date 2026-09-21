const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value;
    const confirmar = document.getElementById("confirmPassword").value;

    const mensagem = document.getElementById("message");

    mensagem.className = "";

    // Verifica campos vazios
    if (nome === "" || email === "" || senha === "" || confirmar === "") {

        mensagem.textContent = "Preencha todos os campos.";
        mensagem.style.color = "#ff6b6b";
        return;

    }

    // Validação do nome
    const nomeValido = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if (!nomeValido.test(nome)) {

        mensagem.textContent = "O nome deve conter apenas letras.";
        mensagem.style.color = "#ff6b6b";
        return;

    }

    // Validação da senha
    if (senha.length < 8) {

        mensagem.textContent = "A senha deve possuir pelo menos 8 caracteres.";
        mensagem.style.color = "#ff6b6b";
        return;

    }

    // Confirmação da senha
    if (senha !== confirmar) {

        mensagem.textContent = "As senhas não coincidem.";
        mensagem.style.color = "#ff6b6b";
        return;

    }

    // Verifica se já existe um cadastro salvo
    const cadastroExistente = localStorage.getItem("cadastro");

    if (cadastroExistente) {

        const cadastro = JSON.parse(cadastroExistente);

        if (cadastro.email.toLowerCase() === email.toLowerCase()) {

            mensagem.textContent = "Este e-mail já está cadastrado.";
            mensagem.style.color = "#ff6b6b";
            return;

        }
    }

    // Cria o objeto com os dados do usuário
    const usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    // Salva o cadastro no localStorage
    localStorage.setItem("cadastro", JSON.stringify(usuario));

    // Limpa os campos do formulário
    form.reset();

    mensagem.style.color = "#4ade80";
    mensagem.textContent = "Cadastro realizado com sucesso!";

    // Redireciona para a tela de login
    setTimeout(function () {

        window.location.href = "../index.html";

    }, 1500);

});
