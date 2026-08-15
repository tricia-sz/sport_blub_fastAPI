![alt text](local.png)

# ⚽ Sport Blub — Full Stack

Aplicação **Full Stack** para cadastro e gerenciamento de jogadores, desenvolvida com **React + TypeScript** no frontend e **FastAPI + Python + MongoDB** no backend.

---

## 🛠️ Tecnologias

### Frontend

- ⚛️ React
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🟢 Node.js

### Backend

- 🐍 Python
- ⚡ FastAPI
- 🚀 Uvicorn
- 📦 UV
- 🍃 MongoDB

---

# 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

| Tecnologia | Link |
|---|---|
| 🐍 Python | [python.org](https://www.python.org/) |
| ⚡ UV | [docs.astral.sh/uv](https://docs.astral.sh/uv/getting-started/installation/) |
| 🟢 Node.js | [nodejs.org](https://nodejs.org/en/download) |
| 🍃 MongoDB | [mongodb.com](https://www.mongodb.com/) |

> Instale as versões compatíveis com o seu sistema operacional.

---

# 🚀 Instalação

## 01 — Clone o repositório

No terminal, execute:

```bash
git clone git@github.com:tricia-sz/sport_blub_fastAPI.git
```

Entre na pasta do projeto:

```bash
cd sport_blub_fastAPI
```

---

# 🐍 Backend

## 02 — Instale as dependências

Na raiz do projeto, execute:

```bash
uv sync
```

O comando irá instalar todas as dependências necessárias para o backend.

---

## 03 — Execute a API

Ainda na raiz do projeto:

```bash
uv run uvicorn --app-dir backend/ api:app --reload
```

Se tudo estiver funcionando corretamente, a API estará disponível em:

```text
http://127.0.0.1:8000
```

### 📚 Documentação da API

O FastAPI disponibiliza automaticamente uma documentação interativa:

**Swagger UI**

```text
http://127.0.0.1:8000/docs
```

**ReDoc**

```text
http://127.0.0.1:8000/redoc
```

---

# ⚛️ Frontend

## 04 — Acesse a pasta do frontend

Abra **outro terminal** e execute:

```bash
cd frontend
```

---

## 05 — Instale as dependências

```bash
npm install
```

---

## 06 — Execute o frontend

```bash
npm run dev
```

O frontend estará disponível em:

```text
http://localhost:5173/
```

---

# 🔄 Funcionamento

A aplicação utiliza a seguinte arquitetura:

```text
┌──────────────────────────┐
│        FRONTEND          │
│     React + TypeScript   │
│     localhost:5173       │
└────────────┬─────────────┘
             │
             │ HTTP / REST API
             ▼
┌──────────────────────────┐
│         BACKEND          │
│    FastAPI + Python      │
│     localhost:8000       │
└────────────┬─────────────┘
             │
             │
             ▼
┌──────────────────────────┐
│         MongoDB          │
│        Database          │
└──────────────────────────┘
```

---

# 🔌 API — Endpoints

A aplicação possui operações de **CRUD** para gerenciamento de jogadores:

| Método | Endpoint | Descrição |
|:---:|---|---|
| `GET` | `/` | Página inicial da API |
| `GET` | `/jogadores` | Lista todos os jogadores |
| `GET` | `/jogadores/{id}` | Busca um jogador pelo ID |
| `POST` | `/jogadores` | Cadastra um novo jogador |
| `PUT` | `/jogadores/{id}` | Atualiza um jogador |
| `DELETE` | `/jogadores/{id}` | Remove um jogador |

---

# 📁 Estrutura do projeto

```text
sport_blub_fastAPI/
│
├── backend/
│   ├── config/
│   │   └── database.py
│   │
│   ├── models/
│   │   └── jogador.py
│   │
│   ├── routes/
│   │   └── jogador.py
│   │
│   ├── schemas/
│   │   └── jogador.py
│   │
│   └── api.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── ...
│   │
│   ├── package.json
│   └── ...
│
├── pyproject.toml
├── uv.lock
└── README.md
```

---

# 💻 Desenvolvimento

Para desenvolver o projeto, mantenha **dois terminais** abertos.

### Terminal 1 — Backend

Na raiz do projeto:

```bash
uv run uvicorn --app-dir backend/ api:app --reload
```

### Terminal 2 — Frontend

```bash
cd frontend
npm run dev
```

### URLs

| Serviço | URL |
|---|---|
| ⚛️ Frontend | http://localhost:5173/ |
| ⚡ API | http://127.0.0.1:8000/ |
| 📚 Swagger | http://127.0.0.1:8000/docs |
| 📖 ReDoc | http://127.0.0.1:8000/redoc |

---

# 📝 Objetivo

Este projeto foi desenvolvido para praticar conceitos de desenvolvimento **Full Stack**, integração entre frontend e backend, criação de APIs REST, operações CRUD e persistência de dados utilizando MongoDB.

---

## 👩‍💻 Autora

**Patrícia**

[![GitHub](https://img.shields.io/badge/GitHub-tricia--sz-181717?logo=github)](https://github.com/tricia-sz)