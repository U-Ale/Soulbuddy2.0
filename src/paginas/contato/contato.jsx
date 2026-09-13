function Contato() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-sm">

        <h2 className="text-3xl font-bold">
          Entre em Contato
        </h2>

        <p className="mt-3 text-gray-600">
          Envie uma mensagem para nossa equipe.
        </p>

        <div className="mt-6">
          📧 contato@Sourcecode.com.br
        </div>

        <form className="mt-6 space-y-4">

          <input
            type="text"
            placeholder="Seu nome"
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />

          <input
            type="email"
            placeholder="Seu email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />

          <textarea
            placeholder="Digite sua mensagem"
            rows={5}
            className="w-full rounded-lg border border-gray-300 px-4 py-3"
          />

          <button
            type="button"
            className="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white hover:bg-gray-800"
          >
            Enviar Mensagem
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contato;