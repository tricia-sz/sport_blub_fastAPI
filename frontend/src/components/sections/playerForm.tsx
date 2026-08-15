import type { SubmitEvent } from "react";

export function PlayerForm() {
  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const player = {
      jogador_nome: formData.get("nome"),
      jogador_idade: Number(formData.get("idade")),
      jogador_time: formData.get("time"),
    };

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/jogadores",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(player),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        console.error("Erro retornado pela API:", data);
        return;
      }

      console.log("Jogador cadastrado:", data);

      form.reset();
    } catch (error) {
      console.error(
        "Erro ao conectar com o backend:",
        error
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-md flex-col gap-5 rounded-xl border p-6 shadow-md"
    >
      <h2 className="text-start text-2xl font-bold text-gray-100">
        Cadastro de jogador
      </h2>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="nome"
          className="text-start text-sm font-medium text-gray-200"
        >
          Nome do jogador
        </label>

        <input
          id="nome"
          name="nome"
          type="text"
          placeholder="Digite o nome"
          required
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="idade"
          className="text-start text-sm font-medium text-gray-200"
        >
          Idade
        </label>

        <input
          id="idade"
          name="idade"
          type="number"
          min="1"
          placeholder="Digite a idade"
          required
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="time"
          className="text-start text-sm font-medium text-gray-200"
        >
          Time
        </label>

        <input
          id="time"
          name="time"
          type="text"
          placeholder="Digite o time"
          required
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-red-700 px-4 py-2 font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-300"
      >
        Cadastrar
      </button>
    </form>
  );
}