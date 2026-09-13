import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/layout/header.tsx"
import Footer from "./componentes/layout/footer.tsx";
import Home from "./paginas/home/home.tsx";
import Sobre from "./paginas/sobre/sobre.tsx"
import Dashboard from "./paginas/dashboard/dashboard.tsx";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;