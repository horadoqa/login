# Página de Login para Testes Automatizados

Este projeto consiste em uma página de login simples, desenvolvida para fins de testes automatizados. A aplicação permite a autenticação de usuários com e-mails e senhas pré-definidos, possibilitando a simulação de cenários de login em testes de interface.

## Funcionalidades

- **Login com E-mail e Senha**: Os usuários podem inserir suas credenciais para realizar o login.
- **Validação de Credenciais**: Mensagens de erro são exibidas quando as credenciais são inválidas ou se os campos estão vazios.
- **Suporte a Testes Automatizados**: A estrutura da página é ideal para a implementação de testes automatizados, permitindo verificar a funcionalidade de login de forma eficaz.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript

## Estrutura

```bash
.
├── README.md
├── assets
│   ├── css
│   │   ├── style.css
│   │   └── welcome.css
│   ├── images
│   │   └── hqa.png
│   └── js
│       ├── cadastro.js
│       ├── login.js
│       └── welcome.js
├── docs
│   ├── cenarios.md
│   └── changelog.md
├── index.html
└── pages
    ├── cadastro.html
    └── welcome.html

6 directories, 12 files
```

## Como Executar

1. Clone este repositório.

```bash
git clone https://github.com/horadoqa/login.git
```

2. Abra o arquivo `index.html` em um navegador da web.
3. Utilize os e-mails e senhas pré-definidos para testar a funcionalidade de login.

```bash
E-mail: usuario@example.com
Senha: 1q2w3e4r
```
Este projeto é uma base sólida para quem deseja implementar e testar a lógica de autenticação em aplicações web.


## Cenários

Uma [lista com alguns cenários](./docs/cenarios.md) possíveis para testes.

