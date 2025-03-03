import { Container } from '@mui/material';
import Titulo from '../../components/Titulo';
import Botao from '../../components/Botao';
import Tabela from '../../components/Tablea';
import Grafico from '../../components/Grafico';
import Subtitulo from '../../components/Subtitulo';
import Avaliacao from '../../components/Avalicacao';
import useDadosConsulta from '../../hooks/useDadosConsulta';
import useDadosProfissional from '../../hooks/useDadosProfissional';
import { useState } from 'react';
import ModalCadastro from './Modal';

export default function Dashboard() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } =
    useDadosProfissional();
  const [open, setOpen] = useState(false);

  if (consultasErro || profissionaisErro)
    console.error('Ocorreu um erro na requisição');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Titulo>Área Administrativa</Titulo>
      <Botao onClick={() => handleOpen()}>Cadastrar especialista</Botao>
      <ModalCadastro open={open} handleClose={handleClose} />

      <Titulo imagem='consulta'>Consultas do Dia</Titulo>
      <Tabela consultas={consultas} />

      <Titulo imagem='grafico'>Consultas mensais por especialista</Titulo>
      <Subtitulo>Dezembro/22</Subtitulo>
      <Grafico consultas={consultas} profissionais={profissionais} />

      <Titulo imagem='avaliacao'>Avaliações de especialistas</Titulo>
      <Avaliacao profissionais={profissionais} />
    </Container>
  );
}
