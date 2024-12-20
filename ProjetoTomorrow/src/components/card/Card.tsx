// import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarrinhoContext } from "@/App";
import { IProducts } from "@/interface/IProducts";

export interface IPropsCard {
  product: IProducts;
}

export default function card({ product }: IPropsCard) {
  let cart = useContext(CarrinhoContext);

  const handleAddCard = (product: IProducts): void => {
    cart?.push(product);
  };

  return (
    <section className="flex">
      <div className="flex">
        <img
          src={product.image}
          className="size-52 p-4"
          alt="imagem do produto"
        />
      </div>
      <div className="flex flex-col align-middle w-full">
        <p>{product.title}</p>
        <p>R$ {product.price}</p>
        <p>{product.category}</p>
        <div className="flex justify-around max-md:flex-col max-md:gap-y-2 mt-10">
          <button
            className="text-center py-2 px-4 border-collapse rounded-full hover:bg-gray-900 hover:text-white"
            onClick={() => handleAddCard(product)}
          >
            Adicionar ao carrinho
          </button>
          {/* <Link
            to={`/product/${product.id}`}
            className="text-center py-2 px-4 border-collapse rounded-full hover:bg-gray-900 hover:text-white"
          >
            Ver Mais
          </Link> */}
        </div>
      </div>
    </section>
  );
}
