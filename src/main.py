from fastapi import FastAPI

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
    
}

@app.get("/")
def inicio():
  return jogadores

@app.get("/jogador/{id_jogador}")
def get_jogador(id_jogador: int):
   return jogadores[id_jogador]
   

def main():
    print("Hello from fundamentos-fastapi!")


if __name__ == "__main__":
    main()
