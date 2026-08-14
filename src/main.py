from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

jogadores = {
   1: {
      "nome": "Yuri Alberto",
      "idade": 23,
      "time": "Corinthians"
   },
   2: {
      "nome": "Rodrigo Garro",
      "idade": 28,
      "time": "Corinthians"
    },
    3: {
      "nome": "Hugo Souza",
      "idade": 25,
      "time": "Corinthians"
    },
    4: {
        "nome": "Ranielle",
        "idade": 27,
        "time": "Corinthians"
        },
    
}

class Jogador(BaseModel):
   nome: str
   idade: int
   time: str

class AtualizaJogador(BaseModel):
   nome: Optional[str] = None
   idade: Optional[int] = None
   time: Optional[str] = None


@app.put("/jogador/{jogador_id}")
def atualiza_jogador(jogador_id: int, jogador: AtualizaJogador):
   if jogador_id not in jogadores:
      return {"Erro": "O Jogador NAO existe"}
   
   if jogador.nome != None:
      jogadores[jogador_id]["nome"] = jogador.nome
   if jogador.idade != None:
       jogadores[jogador_id]["idade"] = jogador.idade
   if jogador.time != None:
      jogadores[jogador_id]["time"] = jogador.time

   return jogadores[jogador_id]      
   

@app.get("/jogador/{id_jogador}")
def get_jogador(id_jogador: int):
   return jogadores[id_jogador]


@app.get("/jogador-time")
def get_jogador_time(time: str):
  for jogador_id in jogadores:
    if jogadores[jogador_id]["time"] == time:
        return jogadores[jogador_id]
  return {"Dados": "Nao foi encontrado"}

# API Metodos # 
#      
@app.get("/")
def inicio():
  return jogadores

@app.post("/jogador/{jogador_id}")
def cadastra_jogador(jogador_id: int,jogador: Jogador):
   if jogador_id in jogadores:
      return {"Erro": "Jogador Já Existe!"}
   jogadores[jogador_id] = jogador
   return jogadores[jogador_id]


@app.delete("/jogador/{jogador_id}")
def exclui_jogador(jogador_id: int):
   if jogador_id not in jogadores:
      return {"Erro": "O Jogador NAO existe"}
   del jogadores[jogador_id]
   return {"Mensagem": "Jogador exluido com sucesso"}
   