# Tela de login é simples até um QA olhar de verdade

À primeira vista, é só isso:

- Campo de usuário
- Campo de senha
- Botão “Entrar”

Parece básico, rápido de testar e seguir pra próxima tarefa, certo?

**Errado.**

Quando um QA começa a analisar, essa “tela simples” vira um universo de possibilidades.

---

## 🔐 Regras de usuário e senha

- Campos obrigatórios
- Formato válido (ex: e-mail)
- Sensibilidade a maiúsculas/minúsculas
- Limite de caracteres
- Política de senha:
  - mínimo de caracteres
  - números
  - caracteres especiais

---

## ❌ Cenários negativos

- Usuário inexistente
- Senha incorreta
- Ambos inválidos
- Campos vazios
- Inputs maliciosos:
  - SQL Injection
  - XSS
- Muitas tentativas (bloqueio)

---

## ✅ Cenários positivos

- Login com sucesso
- Redirecionamento correto
- Manter sessão ativa (ou não)
- Lembrar usuário (se houver)

---

## 🔄 Esqueci minha senha

- Envio de e-mail/token
- Link expirado
- Validação de nova senha
- Confirmação de alteração
- Segurança no reset

---

## 🛡️ Segurança

- Senha criptografada
- Proteção contra brute force
- Mensagens genéricas (sem vazar informação)
- CAPTCHA / MFA
- Timeout de sessão

---

## 🎯 Usabilidade

- Mensagens claras
- Feedback visual:
  - erro
  - sucesso
  - loading
- Navegação por teclado
- Mostrar/ocultar senha
- Autofocus no campo

---

## 🎨 Interface

- Responsividade
- Estados do botão:
  - desabilitado
  - loading
- Consistência visual
- Acessibilidade:
  - contraste
  - leitura

---

## ⚡ Performance

- Tempo de resposta
- Comportamento com muitos acessos simultâneos

---

## 🧪 Conclusão

Pra quem é QA: login não é apenas uma tela.

É segurança, regra de negócio, UX e risco concentrados em um só lugar.

> Nunca subestime o simples.  
> É exatamente nele que os maiores problemas costumam se esconder.


