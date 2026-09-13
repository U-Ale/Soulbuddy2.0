function Integrantes() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Desenvolvido por
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {/* Ale */}
          <div className="rounded-xl bg-white p-6 text-center shadow-sm">
            <h3 className="text-xl font-bold">
              Alexandre Prazeres
            </h3>

            <p className="mt-2 text-gray-600">
              Front-End Developer
            </p>

            <div className="mt-5 flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/alexandre-prazeres-santos/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/U-Ale"
                target="_blank"
                rel="noopener noreferrer"
                 className="text-blue-600 hover:underline"

              >
                GitHub
              </a>
            </div>
          </div>

          {/* Nezio */}
          <div className="rounded-xl bg-white p-6 text-center shadow-sm">
            <h3 className="text-xl font-bold">
              Matheus Nézio
            </h3>

            <p className="mt-2 text-gray-600">
              Front-End Developer
            </p>

            <div className="mt-5 flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/matheus-nezio-9971b0392/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/Nezio22"
                target="_blank"
                rel="noopener noreferrer"
                 className="text-blue-600 hover:underline"

              >
                GitHub
              </a>
            </div>
          </div>

          {/* Julia */}
          <div className="rounded-xl bg-white p-6 text-center shadow-sm">
            <h3 className="text-xl font-bold">
              Julia Rodrigues
            </h3>

            <p className="mt-2 text-gray-600">
              Front-End Developer
            </p>

            <div className="mt-5 flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/júlia-rodrigues-9147593a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/juliaraalmeida77-ux"
                target="_blank"
                rel="noopener noreferrer"
               className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
          
          {/* Felipe Passos */}
          <div className="rounded-xl bg-white p-6 text-center shadow-sm">
            <h3 className="text-xl font-bold">Felipe</h3>
            <p className="mt-2 text-gray-600">Front-End Developer</p>

            <div className="mt-5 flex justify-center gap-4">
               <a
                href="https://www.linkedin.com/in/felipe-passos-110668397/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Linkedln
              </a>

              <a
                href="https://www.youtube.com/watch?v=yYWebbD6JXg&list=RDyYWebbD6JXg&start_radio=1&t=97s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Espaço reservado para o solzinho */}
          <div className="flex items-center justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full">
              ☀️
            </div>
          </div>

          {/* Gabriel precisa botar o link do git e do link o link do yt é provisorio */}
          <div className="rounded-xl bg-white p-6 text-center shadow-sm">
            <h3 className="text-xl font-bold">Gabriel Canevari</h3>
            <p className="mt-2 text-gray-600">Front-End Developer</p>

            <div className="mt-5 flex justify-center gap-4">
             
              <a
                href= "https://www.youtube.com/watch?v=yYWebbD6JXg&list=RDyYWebbD6JXg&start_radio=1&t=97s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/watch?v=yYWebbD6JXg&list=RDyYWebbD6JXg&start_radio=1&t=97s"
                target="_blank"
                rel="noopener noreferrer"
             className="text-blue-600 hover:underline"

              >
                GitHub
              </a>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Integrantes;