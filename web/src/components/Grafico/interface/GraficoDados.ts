import Consulta from '../../../types/Consulta';
import Profissional from '../../../types/Profissional';

export default interface GraficoDados {
  consultas: Consulta[] | null;
  profissionais: Profissional[] | null;
}
