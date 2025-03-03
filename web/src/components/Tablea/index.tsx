import {
  Paper,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Consulta from '../../types/Consulta';
import styled from '@emotion/styled';

const colunasDoTableHead = [
  'Data',
  'Horário',
  'Profissional',
  'Especialidade',
  'Paciente',
  'Modalidade',
];

const LinhaEstilizada = styled(TableRow)(() => ({
  [`&:nth-of-type(odd)`]: {
    backgroundColor: 'var(--cinza-claro)',
    align: 'right',
  },
}));

const CelulaEstilizada = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: 'var(--azul-escuro)',
    fontSize: 18,
    fontWeight: 700,
    fontFamily: 'var(--fonte-principal)',
  },
  [`&.${tableCellClasses}`]: {
    fontSize: 16,
    fontFamiy: 'var(--fonte-principal)',
  },
}));

export default function Tabela({
  consultas,
}: {
  consultas: Consulta[] | null;
}) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label='tabela customizada'>
          <TableHead>
            <TableRow>
              {colunasDoTableHead.map((coluna, index) => (
                <CelulaEstilizada key={index}>{coluna}</CelulaEstilizada>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {consultas &&
              consultas.map((linha) => (
                <LinhaEstilizada>
                  <CelulaEstilizada component='th' scope='row'>
                    {new Date(linha.data).toLocaleDateString()}
                  </CelulaEstilizada>
                  <CelulaEstilizada>{linha.horario}</CelulaEstilizada>
                  <CelulaEstilizada>
                    {linha.profissionais[0].nome}
                  </CelulaEstilizada>
                  <CelulaEstilizada>
                    {linha.profissionais[0].especialidade}
                  </CelulaEstilizada>
                  <CelulaEstilizada>{linha.paciente}</CelulaEstilizada>
                  <CelulaEstilizada>{linha.modalidade}</CelulaEstilizada>
                </LinhaEstilizada>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
