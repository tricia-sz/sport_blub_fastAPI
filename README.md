![alt text](local.png)

# 00 - Prerequisitos:
## Ter instalados em seu equipamento: `NodeJS`, `mongoDB`, `UV` e claro, o  `Python` de acordo com seu sistema operacional.
 Links:
  - UV : https://docs.astral.sh/uv/getting-started/installation/
  - Node: https://nodejs.org/en/download
  - MongoDB:https://www.mongodb.com/

---

# 01 - Clonando este repositório, em seu terminal cole:
```
 git clone  git@github.com:tricia-sz/sport_blub_fastAPI.git

``` 

# 02. Abra a pasta do projeto:

```
  cd sport_blub_fastAPI
  
```
# 03. O backend será executado na raíz do   da pasta `sport_blub_fastAPI`, execute o camando abaixo para `instalar os pacotes` necessários:
```
  uv sync
```

 # 04.  Subindo servidor/API  backend:
 ```
  uv run uvicorn --app-dir backend/ api:app --reload  
```
  
 - Abra o navegador: http://127.0.0.1:8000 

 ---

 # 05. Subindo o fronent. Em seu terminal/prompt, navegue até a pasta frontend:
```
  cd frontend
  
```
# 06.  Instale os pacotes necessários (com node já instalado):
```
 npm install
```
# 07. Executando o front / Subindo servidor:
```
  npm run dev

```
Irá abrir o front no http://localhost:5173/

