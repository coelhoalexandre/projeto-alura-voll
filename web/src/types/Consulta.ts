import Profissional from './Profissional';

export default interface Consulta extends Profissional {
  id: number;
  especialidade: string;
  data: string;
  horario: string;
  paciente: string;
  modalidade: string;
  profissionais: Profissional[];
}
