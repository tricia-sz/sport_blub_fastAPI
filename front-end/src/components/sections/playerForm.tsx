import type { SubmitEvent } from "react";

export function PlayerForm() {
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const player = {
      nome: formData.get("nome"),
      idade: formData.get("idade"),
      time: formData.get("time"),
    };

    console.log(player);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-md flex-col gap-5 rounded-xl border p-6 shadow-md"
    >
      <h2 className="text-2xl text-startfont-bold text-gray-100">
        Cadastro de jogador
      </h2>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="nome"
          className="text-sm text-start font-medium text-gray-200"
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
          className="text-sm text-start font-medium text-gray-200"
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
          className="text-sm text-start font-medium text-gray-200"
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