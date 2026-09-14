function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-400 px-6 py-16">
      <div className="mx-auto max-w-5xl text-center">

        <h1 className="text-5xl font-bold text-white drop-shadow-sm">
          SOL
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
          Uma plataforma para incentivar hábitos sustentáveis
          de forma simples, tecnológica e divertida.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/dashboard"
            className="inline-block w-fit rounded-full bg-white px-6 py-3 font-semibold text-sky-700 shadow-md transition hover:bg-sky-50"
          >
            Acessar Dashboard
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <h2 className="text-xl font-bold text-sky-700">
              🌱 Sustentabilidade
            </h2>

            <p className="mt-3 leading-relaxed text-gray-600">
              Incentive hábitos mais sustentáveis no seu dia a dia.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <h2 className="text-xl font-bold text-sky-700">
              🏆 Desafios
            </h2>

            <p className="mt-3 leading-relaxed text-gray-600">
              Complete desafios e conquiste EcoPoints.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <h2 className="text-xl font-bold text-sky-700">
              🤖 Tecnologia
            </h2>

            <p className="mt-3 leading-relaxed text-gray-600">
              Use tecnologia e inteligência artificial para tornar a sustentabilidade mais divertida.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;