import { Link } from "react-router-dom";
import logo from "../../assets/Icones/logo.png" 

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

<Link to="/">
  <img
    src={logo}
    alt="EcoFuture"
    className="h-20 w-36 object-contain"
  />
</Link>

        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 transition hover:text-gray-900"
          >
            Início
          </Link>

          <Link
            to="/sobre"
            className="text-sm font-medium text-gray-700 transition hover:text-gray-900"
          >
            Sobre
          </Link>
          
          <Link
            to="/Dashboard"
            className="text-sm font-medium text-gray-700 transition hover:text-gray-900"
          >
            Dashboard
          </Link>

          <Link
            to="/Integrantes"
            className="text-sm font-medium text-gray-700 transition hover:text-gray-900"
          >
            Integrantes
          </Link>
          
           <Link
            to="/Contato"
            className="text-sm font-medium text-gray-700 transition hover:text-gray-900"
          >
            Contato
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;