import type { ContatoItem } from "../types/contato";
import Email from "../assets/icon/icon-email.png";
import Localizacao from "../assets/icon/icon-localizacao.png";

export const contatoItem: ContatoItem[]= [
    { icone: Email, titulo: "Email", conteudo: "annaclararussoluca@gmail.com" },
    { icone: Localizacao, titulo: "Localização", conteudo: "São Paulo, Brasil" },
]