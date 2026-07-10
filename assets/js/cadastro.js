const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("password").value;
    const confirmar = document.getElementById("confirmPassword").value;

    const mensagem = document.getElementById("message");

    mensagem.className = "";

    if(nome === "" || email === "" || senha === "" || confirmar === ""){

        mensagem.textContent = "Preencha todos os campos.";
        mensagem.style.color = "#ff6b6b";
        return;

    }

    if(senha.length < 8){

        mensagem.textContent = "A senha deve possuir pelo menos 8 caracteres.";
        mensagem.style.color = "#ff6b6b";
        return;

    }

    if(senha !== confirmar){

        mensagem.textContent = "As senhas não coincidem.";
        mensagem.style.color = "#ff6b6b";
        return;

    }

    mensagem.style.color = "#4ade80";
    mensagem.textContent = "Cadastro realizado com sucesso!";

    setTimeout(function(){

        window.location.href="../index.html";

    },1500);

});