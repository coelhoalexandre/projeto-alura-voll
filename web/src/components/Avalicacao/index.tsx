import styled from 'styled-components';
import Profissional from '../../types/Profissional';
import Card from './Card';
import Botao from '../Botao';

interface AvaliacaoProps {
  profissionais: Profissional[] | null;
}

const SecaoCard = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

export default function Avaliacao({ profissionais }: AvaliacaoProps) {
  const minProfissionaisParaExibirBotao = 4;
  return (
    <>
      <SecaoCard>
        {profissionais && profissionais.length
          ? profissionais.map((profissional) => (
              <Card profissional={profissional} />
            ))
          : 'Não há avaliações para mostrar'}
      </SecaoCard>
      {profissionais &&
        profissionais.length > minProfissionaisParaExibirBotao && (
          <Botao>Ver mais</Botao>
        )}
    </>
  );
}
