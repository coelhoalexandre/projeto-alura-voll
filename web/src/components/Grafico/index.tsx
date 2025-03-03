import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import GraficoDados from './interface/GraficoDados';
import useDadosGrafico from './useDadosGrafico';
import Dados from './interface/Dados';
import styled from 'styled-components';

interface GraficoProps extends GraficoDados {}

const SecaoEstilizada = styled.section`
  background-color: var(--branco);
  border-radius: 16px;
`;

export default function Grafico({ consultas, profissionais }: GraficoProps) {
  let dados: Dados[] = useDadosGrafico({ profissionais, consultas });

  return (
    <SecaoEstilizada>
      <ResponsiveContainer width='100%' height={350}>
        <BarChart
          layout='vertical'
          data={dados}
          margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
        >
          <XAxis type='number'></XAxis>
          <YAxis type='category' dataKey='nome'></YAxis>
          <Bar dataKey='consultas' fill='#083860' barSize={30}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </SecaoEstilizada>
  );
}
