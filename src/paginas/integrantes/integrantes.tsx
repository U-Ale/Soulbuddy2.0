import ale from "../../assets/integrantes/ale.jpg";
import julia from "../../assets/integrantes/julia.jpg";
import matheus from "../../assets/integrantes/matheus.jpg";
import gab from "../../assets/integrantes/gab.jpg";
import fela from "../../assets/integrantes/fela.jpg";
import solzim from "../../assets/integrantes/solzim.jpeg";

function Integrantes() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-400 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Desenvolvido por
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

{/* Ale */}
<div className="rounded-xl bg-white p-6 text-center shadow-sm">

  <img
    src={ale}
    className="mx-auto mb-4 h-28 w-28 rounded-full object-cover"
  />

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
              <img
            src={matheus}
            className="mx-auto mb-4 h-28 w-28 rounded-full object-cover"
               />
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
                  <img
                  src={julia}
                  className="mx-auto mb-4 h-28 w-28 rounded-full object-cover" />

            <h3 
              className="text-xl font-bold">
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
          
          {/* Felipe */}
          <div className="rounded-xl bg-white p-6 text-center shadow-sm">

             <img
            src={fela}
            className="mx-auto mb-4 h-28 w-28 rounded-full object-cover"
               />

            <h3 className="text-xl font-bold">Felipe Passos</h3>
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
                href="https://github.com/Felipeads12"
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
           <img
           src={solzim}
           alt="Sol"
           className="h-60 w-60 object-contain"
           />
           </div>

          {/* Gabriel */}
          <div className="rounded-xl bg-white p-6 text-center shadow-sm">
            <img
            src={gab}
            className="mx-auto mb-4 h-28 w-28 rounded-full object-cover"
           />
            <h3 className="text-xl font-bold">Gabriel Canevari</h3>
            <p className="mt-2 text-gray-600">Front-End Developer</p>

            <div className="mt-5 flex justify-center gap-4">
             
              <a
                href= "https://www.linkedin.com/in/gabriel-canevari-476825382?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Canevari2"
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