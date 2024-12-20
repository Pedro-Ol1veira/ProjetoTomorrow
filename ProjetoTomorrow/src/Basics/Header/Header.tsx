import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-around p-5 bg-gray-950 sticky top-0">
      <div>
        <Link to="/" className="text-white">Vulckbô</Link>
      </div>
      <nav>
        <Link to="/carrinho" className="text-white hover:text-red-600">Carrinho</Link>
      </nav>
    </header>
  );
}
