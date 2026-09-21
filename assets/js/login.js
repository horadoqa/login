// Usuários e senhas pré-definidos
const validUsers = {
    "usuario@example.com": "1q2w3e4r",
    "usuario2@example.com": "1q2w3e4r"
};


// Recupera o cadastro salvo no localStorage
const cadastro = JSON.parse(localStorage.getItem("cadastro"));


// Função de login
function login() {

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Limpa mensagem anterior
    errorMessage.textContent = "";
    errorMessage.classList.remove("error");


    // Verifica campos vazios
    if (username === "" || password === "") {

        errorMessage.textContent = "E-mail e senha são obrigatórios!";
        errorMessage.classList.add("error");
        return;

    }


    // Verifica usuários pré-definidos
    if (validUsers[username] && validUsers[username] === password) {

        window.location.href = "pages/welcome.html";
        return;

    }


    // Verifica usuário cadastrado no localStorage
    if (
        cadastro &&
        cadastro.email.toLowerCase() === username.toLowerCase() &&
        cadastro.senha === password
    ) {

        // Salva o usuário atualmente logado
        localStorage.setItem("usuarioLogado", JSON.stringify({
            nome: cadastro.nome,
            email: cadastro.email
        }));

        window.location.href = "pages/welcome.html";
        return;

    }


    // Se nenhuma credencial for válida
    errorMessage.textContent = "E-mail ou senha inválidos!";
    errorMessage.classList.add("error");

}


// Detecta a tecla Enter
document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        login();
    }

});
