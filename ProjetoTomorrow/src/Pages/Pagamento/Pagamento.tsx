import { Input } from "@/components/ui/input";
import { FormEvent, ChangeEvent, useEffect, useContext } from "react";
import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { IAddress } from "@/interface/IAddress";
import { CarrinhoContext } from "@/App";
import { useNavigate } from "react-router-dom";

export default function Pagamento() {
  const navigate = useNavigate();
  
  let cart = useContext(CarrinhoContext);
  const [cep, setCep] = useState<string>();
  const [error, setError] = useState<string>();
  const [address, setAddress] = useState<IAddress | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [fretePrice, setFretePrice] = useState<number>(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cep?.length != 8 || !parseInt(cep)) {
      setError("CEP Invalido!");
    } else {
      setError("");
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((json) => setAddress(json));
    }
  };

  const handlePay = () => {
    if(fretePrice == 0) {
      setError("O frete precisa ser calculado!");
    } else {
      for (let i = 0; i <= cart?.length; i++) {
        cart?.pop();
      }
      navigate("/");
    }

  }

  useEffect(() => {
    if (!address?.erro) {
      if (address?.regiao == "Norte") {
        setFretePrice(Math.floor(Math.random() * (30 - 15 + 1)) + 15);
      } else if (address?.regiao == "Nordeste") {
        setFretePrice(Math.floor(Math.random() * (15 - 5 + 1)) + 5);
      } else if (address?.regiao == "Sul") {
        setFretePrice(Math.floor(Math.random() * (70 - 50 + 1)) + 50);
      } else if (address?.regiao == "Sudeste") {
        setFretePrice(Math.floor(Math.random() * (50 - 30 + 1)) + 30);
      } else if (address?.regiao == "Centro-Oeste") {
        setFretePrice(Math.floor(Math.random() * (50 - 30 + 1)) + 30);
      }
    }
  }, [address]);

  useEffect(() => {
    let total: number = 0;
    cart?.map((item) => {
      total += item.price;
    });
    total += fretePrice;

    setTotalPrice(total);
  }, [fretePrice]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-3xl p-5">Pagamento</h1>
      <form className="max-w-md m-auto" onSubmit={handleSubmit}>
        <div className="py-4">
          <Label htmlFor="cep">CEP:</Label>
          <Input
            id="cep"
            type="text"
            placeholder="CEP"
            onChange={handleChange}
          />
        </div>
        <input
          className="text-center py-2 px-4 border-collapse rounded-full hover:bg-gray-900 hover:text-white"
          type="submit"
          value="Calcular Frete"
        />
      </form>
      {(address && address.erro) || error ? (
        <div className="m-auto max-w-md py-5 border-b-2">
          <p>cep Invalido</p>
        </div>
      ) : (
        <div className="m-auto max-w-md py-5 border-b-2">
          <p>
            <span className="font-bold">CEP</span>: {address?.cep}
          </p>
          <p>
            <span className="font-bold">logradouro</span>: {address?.logradouro}
          </p>
          <p>
            <span className="font-bold">complemento</span>:{" "}
            {address?.complemento}
          </p>
          <p>
            <span className="font-bold">unidade</span>: {address?.unidade}
          </p>
          <p>
            <span className="font-bold">bairro</span>: {address?.bairro}
          </p>
          <p>
            <span className="font-bold">localidade</span>: {address?.localidade}
          </p>
          <p>
            <span className="font-bold">uf</span>: {address?.uf}
          </p>
          <p>
            <span className="font-bold">estado</span>: {address?.estado}
          </p>
          <p>
            <span className="font-bold">regiao</span>: {address?.regiao}
          </p>
          <p>
            <span className="font-bold">ibge</span>: {address?.ibge}
          </p>
          <p>
            <span className="font-bold">gia</span>: {address?.gia}
          </p>
          <p>
            <span className="font-bold">ddd</span>: {address?.ddd}
          </p>
          <p>
            <span className="font-bold">siafi</span>: {address?.siafi}
          </p>
        </div>
      )}
      <div className="max-w-md m-auto flex flex-col gap-2 py-2">
        <button className="text-center py-2 px-4 border-collapse rounded-full hover:bg-gray-900 hover:text-white" onClick={handlePay}>
          Confirmar Pagamento
        </button>
        <div>
          <p className="text-right">
            <span className="font-bold">Preço do Frete:</span> {fretePrice}
          </p>
          <p className="text-right">
            <span className="font-bold">Preço Total:</span> {totalPrice};
          </p>
        </div>
      </div>
    </div>
  );
}
