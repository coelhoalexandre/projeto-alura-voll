import Endereco from './Endereco';

export default interface Profissional {
  nome: string;
  crm: string;
  imagem: string;
  especialidade: string;
  possuiPlanoDeSaude: boolean;
  senha: string;
  planoSaude: string[];
  estaAtivo: boolean;
  email: string;
  telefone: string;
  endereco: Endereco;
}
