import Profissional from '../types/Profissional';
import useFetch from './useFetch';

const useDadosProfissional = () => {
  return useFetch<Profissional[]>({ url: 'especialista' });
};

export default useDadosProfissional;
