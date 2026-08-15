def jogadorEntidade(jogador):
    if jogador is None:
        return None

    return {
        "id": str(jogador["_id"]),
        "jogador_nome": jogador["jogador_nome"],
        "jogador_idade": jogador["jogador_idade"],
        "jogador_time": jogador["jogador_time"],
    }


def listaJogadoresEntidade(jogadores):
    return [
        jogadorEntidade(jogador)
        for jogador in jogadores
    ]