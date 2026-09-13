import { useState } from "react";

function Dashboard() {

    const [ecoPoints, setEcoPoints] = useState(1250);
    const [aguaConcluida, setAguaConcluida] = useState(false)
    const [lixoConcluida, setLixoConcluida] = useState(false);
    const [arvoreConcluida, setArvoreConcluida] = useState(false);


  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-sky-400">
      
      <div className="border-b border-sky-500 bg-gradient-to-r from-sky-400 to-sky-500 px-6 py-4">
        <a
          href="/"
          className="inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-sky-700 shadow-sm transition hover:bg-sky-50"
        >
          ← Sair do Dashboard
        </a>
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-8 p-6 md:grid-cols-3">

        {/* Perfil */}
        <div className="rounded-xl border border-sky-100 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-sky-100 text-sky-600">
              Avatar
            </div>

            <h2 className="text-xl font-bold">
              Ana Silva
            </h2>

            <p className="mt-2 text-lg font-bold text-sky-600">
              EcoPoints: {ecoPoints}
            </p>
          </div>
        </div>

        {/* Missões */}
        <div className="rounded-xl border border-sky-100 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-sky-700">
            Missões
          </h2>

          <ul className="space-y-3">
           <li>
            <button
               className="w-full rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-left transition hover:bg-sky-100"
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
              className="w-full rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-left transition hover:bg-sky-100"
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
               className="w-full rounded-lg border border-sky-200 bg-sky-50 px-4 py-3 text-left transition hover:bg-sky-100"
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
        <div className="rounded-xl border border-sky-100 bg-white p-6 shadow-sm transition hover:shadow-md">
          <h2 className="mb-4 text-xl font-bold text-sky-700">
            Ranking
          </h2>

          <div className="space-y-3">
            <p className="rounded-lg bg-sky-50 px-4 py-3 font-medium text-sky-700">
              🥇 Ana — {ecoPoints} pts
            </p>
            <p className="rounded-lg bg-gray-50 px-4 py-3">
              🥈 Lucas — 2800 pts
            </p>
            <p className="rounded-lg bg-gray-50 px-4 py-3">
              🥉 Maria — 2500 pts
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;