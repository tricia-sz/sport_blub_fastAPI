from fastapi import APIRouter
from bson import ObjectId

from config.database import conexao
from models.jogador import Jogador
from schemas.jogador import jogadorEntidade, listaJogadoresEntidade


jogador_router = APIRouter()


@jogador_router.get("/")
async def inicio():
    return "Bem vindo ao FullStack Farm"


# Lista todos os jogadores
@jogador_router.get("/jogadores")
async def lista_jogadores():
    jogadores = conexao.local.jogador.find()

    return listaJogadoresEntidade(jogadores)


# Detalhes de um jogador
@jogador_router.get("/jogadores/{jogador_id}")
async def busca_jogador_id(jogador_id: str):
    jogador = conexao.local.jogador.find_one(
        {
            "_id": ObjectId(jogador_id)
        }
    )

    return jogadorEntidade(jogador)


# Insere novo jogador
@jogador_router.post("/jogadores")
async def cadastra_jogador(jogador: Jogador):
    resultado = conexao.local.jogador.insert_one(
        dict(jogador)
    )

    novo_jogador = conexao.local.jogador.find_one(
        {
            "_id": resultado.inserted_id
        }
    )

    return jogadorEntidade(novo_jogador)


# Atualiza jogador
@jogador_router.put("/jogadores/{jogador_id}")
async def atualiza_jogador(
    jogador_id: str,
    jogador: Jogador
):
    conexao.local.jogador.find_one_and_update(
        {
            "_id": ObjectId(jogador_id)
        },
        {
            "$set": dict(jogador)
        }
    )

    jogador_atualizado = conexao.local.jogador.find_one(
        {
            "_id": ObjectId(jogador_id)
        }
    )

    return jogadorEntidade(jogador_atualizado)


# Exclui jogador
@jogador_router.delete("/jogadores/{jogador_id}")
async def exclui_jogador(jogador_id: str):
    jogador_excluido = conexao.local.jogador.find_one_and_delete(
        {
            "_id": ObjectId(jogador_id)
        }
    )

    return jogadorEntidade(jogador_excluido)