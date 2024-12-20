import { CarrinhoContext } from "@/App";
import { useContext } from "react";
import { Link } from "react-router-dom";
// import { TiDeleteOutline } from "react-icons/ti";


export default function Home() {
  const cart = useContext(CarrinhoContext);

  // const handleDelete = (id:number) => {
    
  // }

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-3xl p-5">Carrinho de Compras</h1>
      <div className="max-w-screen-2xl m-auto">
        {cart &&
          cart.map((product) => (
            <div className="flex flex-row justify-between align-middle border-b-2 p-2">
              <img
                src={product.image}
                className="size-52 p-4"
                alt="imagem do produto"
              />
              <div className="flex flex-col justify-center ">
                <p>
                  <span className="font-bold">Produto:</span> {product.title}
                </p>
                <p>
                  <span className="font-bold">Preço:</span> R${product.price}
                </p>
                {/* <TiDeleteOutline className="cursor-pointer text-2xl hover:bg-black" onClick={() => handleDelete(product.id)}/> */}
              </div>
            </div>
          ))}
        <div className="flex justify-end py-4">
          <Link
            to="/pagamento"
            className="text-center py-2 px-4 border-collapse rounded-full hover:bg-gray-900 hover:text-white text-xl"
          >
            Pagamento
          </Link>
        </div>
      </div>
    </div>
  );
}
