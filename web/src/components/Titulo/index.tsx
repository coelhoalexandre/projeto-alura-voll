import avaliacao from './assets/avaliacao.png';
import grafico from './assets/grafico.png';
import consulta from './assets/consulta.png';
import styled from 'styled-components';

interface Props {
  imagem?: string;
  children?: React.ReactNode;
}

interface Imagens {
  avaliacao: string;
  grafico: string;
  consulta: string;
}

const SpanEstilizado = styled.span<Props>`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 25px;
  height: 25px;
  background-image: ${(props) =>
    props.imagem ? `url(${props.imagem})` : 'none'};
`;

const TituloEstilizado = styled.h2`
  color: var(--azul-claro);
`;

const ContainerEstilizado = styled.div`
  display: flex;
  align-items: center;
`;

export default function Titulo({ imagem, children }: Props) {
  const listaDeImagens: Imagens = {
    avaliacao: avaliacao,
    grafico: grafico,
    consulta: consulta,
  };

  let imagemSrc: string | undefined = undefined;

  if (imagem) imagemSrc = listaDeImagens[imagem as keyof Imagens];

  return (
    <ContainerEstilizado>
      {imagemSrc && <SpanEstilizado imagem={imagemSrc} />}
      <TituloEstilizado> {children} </TituloEstilizado>
    </ContainerEstilizado>
  );
}
