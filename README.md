# MarketPlace

> **⚠️ Projeto em desenvolvimento — muitas funcionalidades ainda estão sendo implementadas.**

Plataforma de marketplace onde usuários podem criar contas, anunciar produtos e entrar em contato com vendedores de forma rápida via WhatsApp ou e-mail. O objetivo é oferecer uma experiência simples, prática e eficiente para compra e venda de produtos online.

---

## Tecnologias utilizadas

### Frontend
- [React 19](https://react.dev/) com [Vite](https://vitejs.dev/)
- [React Router DOM v7](https://reactrouter.com/) — navegação entre páginas
- [Styled Components](https://styled-components.com/) — estilização
- [Axios](https://axios-http.com/) — requisições HTTP

### Backend
- [Node.js](https://nodejs.org/) com [Express 5](https://expressjs.com/)
- [MySQL2](https://github.com/sidorares/node-mysql2) — banco de dados relacional
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js) — hash de senhas
- [JSON Web Token (JWT)](https://jwt.io/) — autenticação
- [dotenv](https://github.com/motdotla/dotenv) — variáveis de ambiente
- [CORS](https://github.com/expressjs/cors) — controle de acesso

---

## Estrutura do projeto

```
MarketPlace/
├── backend/
│   ├── database/
│   │   └── schema.sql        # Script de criação do banco de dados
│   ├── db.js                 # Conexão com o MySQL
│   ├── server.js             # Servidor Express
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/       # Componentes reutilizáveis
    │   │   ├── topbar/
    │   │   ├── logo/
    │   │   ├── search_bar/
    │   │   ├── profile_button/
    │   │   ├── botbar_btn/
    │   │   ├── Home_top/
    │   │   └── category_list/
    │   ├── containers/       # Páginas da aplicação
    │   │   ├── home/
    │   │   ├── login/
    │   │   ├── signup/
    │   │   └── about_us/
    │   ├── assets/           # Imagens e fontes
    │   ├── styles/           # Estilos globais
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

## Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v18+)
- [MySQL](https://www.mysql.com/) (rodando localmente)
- [Git](https://git-scm.com/)

### 1. Clone o repositório

```bash
git clone https://github.com/natapereirax-cmd/MarketPlace.git
cd MarketPlace
```

### 2. Configure o banco de dados

Crie o banco e a tabela executando o script SQL:

```bash
mysql -u root -p < backend/database/schema.sql
```

### 3. Configure o backend

```bash
cd backend
npm install
```

Crie um arquivo `.env` na pasta `backend/`:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=marketplace
JWT_SECRET=seu_segredo_jwt
PORT=3001
```

> **Atenção:** atualize `db.js` para ler as credenciais do `.env` antes de rodar em produção.

Inicie o servidor:

```bash
node server.js
```

O backend ficará disponível em `http://localhost:3001`.

### 4. Configure o frontend

```bash
cd ../frontend
npm install
npm run dev
```

O frontend ficará disponível em `http://localhost:5173`.

---

##  Funcionalidades

### ✅ Implementadas
- Estrutura de rotas (Home, Login, Cadastro, Sobre nós)
- Tela de Login (UI)
- Tela de Cadastro (UI)
- Topbar com logo, barra de busca e botão de perfil
- Listagem de categorias (UI)
- Banco de dados com tabela de usuários
- Servidor Express com CORS e suporte a JSON

### 🔧 Em desenvolvimento
- Integração frontend ↔ backend (Login e Cadastro funcionais)
- Autenticação com JWT
- Criação e listagem de anúncios de produtos
- Contato com vendedor via WhatsApp / e-mail
- Página de detalhes do produto
- Busca e filtro por categoria
- Upload de imagens de produtos
- Painel do usuário

---

## Licença

Este projeto ainda não possui uma licença definida.
