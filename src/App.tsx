import Header from "./componentes/layout/header.tsx"
import Footer from "./componentes/layout/footer.tsx";
import Home from "./paginas/home/home.tsx";


function App() {
  return (
    <>
      <Header />

      <main>
        <Home />
      </main>

      <Footer />
    </>
  );
}

export default App;