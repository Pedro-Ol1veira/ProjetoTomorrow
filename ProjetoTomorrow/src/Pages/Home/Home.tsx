import { useEffect, useState } from "react";
import Card from "@/components/card/Card";
import { IProducts } from "@/interface/IProducts";

export default function Home() {
  const [data, setData] = useState<IProducts[]>();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="max-w-screen-2xl m-auto min-h-screen">
      <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-16 bg-white p-12">
        {data ? (
          data.map((product) => <Card key={product.id} product={product} />)
        ) : (
          <p className="text-center text-2xl">Carregando...</p>
        )}
      </div>
    </div>
  );
}
