import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import Home from "./Pages/Home/Home";
import Carrinho from "./Pages/Carinho/Carrinho";
import Pagamento from "./Pages/Pagamento/Pagamento";
import Header from "./Basics/Header/Header";
import Footer from "./Basics/Footer/Footer";
import { useState } from "react";
import { IProducts } from "./interface/IProducts";

export const CarrinhoContext = createContext<IProducts[] | undefined>([]);

function App() {
  const [cart, setCart] = useState<IProducts[]>([]);

  return (
    <CarrinhoContext.Provider value={cart}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/pagamento" element={<Pagamento />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CarrinhoContext.Provider>
  );
}

export default App;
