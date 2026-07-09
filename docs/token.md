# Gerando o TOKEN


O fluxo correto é:

```text
Login (HTML)
        │
        ▼
JavaScript (fetch)
        │
        ▼
API (Node, Java, PHP, Python...)
        │
Verifica usuário e senha no banco
        │
        ▼
Gera um JWT
        │
        ▼
Retorna o token
        │
        ▼
Frontend salva o token
```

### Exemplo usando JWT

O usuário faz login:

```http
POST /login
```

```json
{
  "email": "usuario@example.com",
  "senha": "123456"
}
```

O backend valida as credenciais e responde:

```json
{
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

No JavaScript você salva o token:

```javascript
fetch("/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email,
        senha
    })
})
.then(response => response.json())
.then(data => {

    localStorage.setItem("token", data.token);

    window.location.href = "pages/welcome.html";

});
```

Depois, para chamar qualquer API protegida:

```javascript
const token = localStorage.getItem("token");

fetch("/usuarios", {

    headers: {
        Authorization: `Bearer ${token}`
    }

});
```

---

## Se for apenas um projeto de estudos

Caso você queira apenas simular um login sem backend, pode criar um token fictício:

```javascript
const token = crypto.randomUUID();

localStorage.setItem("token", token);
```

ou

```javascript
const token = btoa(Date.now() + username);

localStorage.setItem("token", token);
```

Isso gera um identificador único, mas **não é um token de autenticação seguro**. Ele serve apenas para estudar o fluxo da aplicação.

---

## Se você pretende usar Java com Spring Boot

Como você mencionou anteriormente que está trabalhando com Java, o fluxo ideal seria:

1. Front-end envia email e senha.
2. Spring Security autentica o usuário.
3. A aplicação gera um **JWT**.
4. O JWT é devolvido ao navegador.
5. O navegador armazena o token (`localStorage` ou cookie `HttpOnly`).
6. Todas as requisições seguintes enviam `Authorization: Bearer <token>`.

Esse é o padrão utilizado na maioria das APIs REST modernas.

Se o seu projeto **Hora do QA** será em **Java + Spring Boot**, posso mostrar uma implementação completa com:

* Login (`/auth/login`);
* Cadastro (`/auth/register`);
* Geração de JWT;
* Filtro de autenticação (`JwtAuthenticationFilter`);
* Integração do HTML com a API usando `fetch()`.
