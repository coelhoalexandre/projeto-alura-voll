import Consulta from '../types/Consulta';
import useFetch from './useFetch';

const useDadosConsulta = () => {
  return useFetch<Consulta[]>({ url: 'consulta' });
};

export default useDadosConsulta;
