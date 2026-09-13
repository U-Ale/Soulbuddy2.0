import { useState } from "react";

function Dashboard() {

    const [ecoPoints, setEcoPoints] = useState(1250);
    const [aguaConcluida, setAguaConcluida] = useState(false)
    const [lixoConcluida, setLixoConcluida] = useState(false);
    const [arvoreConcluida, setArvoreConcluida] = useState(false);


  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="border-b border-gray-200 bg-white px-6 py-4">
        <a
          href="/"
          className="text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          ← Sair do Dashboard
        </a>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 p-6 md:grid-cols-3">

        {/* Perfil */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-200">
              Avatar
            </div>

            <h2 className="text-xl font-bold">
              Ana Silva
            </h2>

            <p className="mt-2 text-gray-600">
              EcoPoints: {ecoPoints}
            </p>
          </div>
        </div>

        {/* Missões */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">
            Missões
          </h2>

          <ul className="space-y-3">
           <li>
            <button
               onClick={() => {
               if (!aguaConcluida) {
               setEcoPoints(ecoPoints + 10);
               setAguaConcluida(true);
               }
               }}
>              {aguaConcluida
               ? "✅ Economizar água = 10 EP"
               : "⬜ Economizar água = 10 EP"}
            </button>
            </li> 

            <li><button
              onClick={() => {
              if (!lixoConcluida) {
              setEcoPoints(ecoPoints + 5);
              setLixoConcluida(true);
              }
              }}
  >
              {lixoConcluida
             ? "✅ Separar lixo = 5 EP"
             : "⬜ Separar lixo = 5 EP"}
             </button></li>
            <li>

            <button
               onClick={() => {
               if (!arvoreConcluida) {
               setEcoPoints(ecoPoints + 50);
               setArvoreConcluida(true);
               }
               }}
  >
               {arvoreConcluida
               ? "✅ Plantar árvore = 50 EP"
               : "⬜ Plantar árvore = 50 EP"}
              </button>
            </li>
          </ul>
        </div>

        {/* Ranking */}
        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">
            Ranking
          </h2>

          <div className="space-y-3">
            <p>1º Ana — {ecoPoints} pts</p>
            <p>2º Lucas — 2800 pts</p>
            <p>3º Maria — 2500 pts</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;