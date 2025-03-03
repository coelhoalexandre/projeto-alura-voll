import styled from 'styled-components';

interface CampoDigitacaoProps {
  label?: string;
  tipo?: React.HTMLInputTypeAttribute;
  valor: string;
  placeholder?: string;
  onChange: (valor: string) => void;
}

const Campo = styled.input`
  background: #f0f0f0;
  margin: 1em 0;
  box-sizing: border-box;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  border: none;
  width: 100%;
  padding: 16px;
`;

const Container = styled.div`
  width: 100%;
`;

const Rotulo = styled.label`
  display: block;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--azul-escuro);
`;

export default function CampoDigitacao({
  label,
  tipo,
  valor,
  placeholder,
  onChange,
}: CampoDigitacaoProps) {
  return (
    <Container>
      {label && <Rotulo>{label}</Rotulo>}
      <Campo
        type={tipo}
        value={valor}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </Container>
  );
}
