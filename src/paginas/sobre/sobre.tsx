function Sobre() {
  return (
<section className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-400 px-6 py-12">
  <div className="mx-auto max-w-5xl">

    <h1 className="mb-12 text-center text-5xl font-bold text-white drop-shadow-sm">
      Sobre o SOL
    </h1>

    <p className="mx-auto mb-10 max-w-2xl text-center text-lg leading-relaxed text-white/90">
      O SOL é uma plataforma criada para incentivar
      hábitos sustentáveis de forma simples, tecnológica e divertida.
    </p>

    <div className="grid gap-8 md:grid-cols-3">

      <div className="rounded-xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h2 className="mb-3 border-b border-sky-100 pb-2 text-2xl font-bold text-sky-700">
          Problema
        </h2>

        <p className="text-base leading-relaxed text-gray-600">
          Muitas pessoas não possuem incentivo
          para desenvolver hábitos sustentáveis
          no dia a dia.
        </p>
      </div>

      <div className="rounded-xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h2 className="mb-3 border-b border-sky-100 pb-2 text-2xl font-bold text-sky-700">
          Solução
        </h2>

        <p className="text-base leading-relaxed text-gray-600">
          Criamos uma plataforma gamificada
          que incentiva ações ecológicas através
          de desafios, pontos e inteligência artificial.
        </p>
      </div>

      <div className="rounded-xl bg-white p-8 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <h2 className="mb-3 border-b border-sky-100 pb-2 text-2xl font-bold text-sky-700">
          Objetivo
        </h2>

        <p className="text-base leading-relaxed text-gray-600">
          Tornar a sustentabilidade algo mais
          acessível, moderno, tecnológico e divertido.
        </p>
      </div>

    </div>
  </div>
</section>
  );
}

export default Sobre;