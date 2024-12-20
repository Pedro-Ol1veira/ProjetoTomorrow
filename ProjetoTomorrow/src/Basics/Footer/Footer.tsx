import {
  SlSocialInstagram,
  SlSocialFacebook,
  SlSocialGithub,
} from "react-icons/sl";

export default function Footer() {
  return (
    <footer className="flex justify-evenly align-middle gap-x-10 p-5 bg-gray-950">
      <div>
        <h2 className="py-2 text-white">Redes Sociais</h2>
        <div className="flex flex-col gap-y-3">
          <a href="" className="cursor-pointer">
            <SlSocialInstagram className="text-white text-xl" />
          </a>
          <a href="" className="cursor-pointer">
            <SlSocialFacebook className="text-white text-xl" />
          </a>
          <a href="" className="cursor-pointer">
            <SlSocialGithub className="text-white text-xl" />
          </a>
        </div>
      </div>
      <div>
        <h2 className="py-2 text-white">Contato e Endereço</h2>
        <div className="flex flex-col gap-3">
          <p className="text-white">Av. Edgard Santos, 2 - Narandiba, Salvador - BA, 41192-005</p>
          <p className="text-white">(71) 99133-2928</p>
        </div>
      </div>
    </footer>
  );
}
