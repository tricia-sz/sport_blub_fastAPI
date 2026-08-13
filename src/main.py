from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def inicio():
  return{"Mensagem": "Olá Mundo"}


def main():
    print("Hello from fundamentos-fastapi!")


if __name__ == "__main__":
    main()
