export interface IAddress {
  cep: string | undefined;
  logradouro: string | undefined;
  complemento: string | undefined;
  unidade: string | undefined;
  bairro: string | undefined;
  localidade: string | undefined;
  uf: string | undefined;
  estado: string | undefined;
  regiao: string | undefined;
  ibge: string | undefined;
  gia: string | undefined;
  ddd: string | undefined;
  siafi: string | undefined;
  erro? :string | undefined;
}
