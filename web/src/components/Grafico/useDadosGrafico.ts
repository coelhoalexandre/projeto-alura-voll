import Dados from './interface/Dados';
import GraficoDados from './interface/GraficoDados';

const useDadosGrafico = ({ profissionais, consultas }: GraficoDados) => {
  let dados: Dados[] = [];

  if (profissionais && profissionais.length && consultas) {
    dados = profissionais.map((profissional) => ({
      nome: profissional.nome,
      consultas: consultas.filter((consulta) =>
        consulta.profissionais.some(
          (profissionalConsulta) =>
            profissionalConsulta.nome === profissional.nome
        )
      ).length,
    }));
  }

  return dados;
};

export default useDadosGrafico;
