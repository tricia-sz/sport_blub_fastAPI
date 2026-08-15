from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.jogador import jogador_router


cliente_app = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=cliente_app,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(jogador_router)