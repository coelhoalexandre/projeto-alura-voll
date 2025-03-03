import styled from 'styled-components';
import facebook from './assets/facebook.png';
import whatsapp from './assets/whatsapp.png';
import google from './assets/google.png';
import instagram from './assets/instagram.png';

interface RedeSocialItem {
  href: string;
  src: string;
  alt: string;
}

const listaRedeSociais: RedeSocialItem[] = [
  { href: '#', src: facebook, alt: 'logo do facebook' },
  { href: '#', src: whatsapp, alt: 'logo do whatsapp' },
  { href: '#', src: google, alt: 'logo do google' },
  { href: '#', src: instagram, alt: 'logo do instagram' },
];

const RodapeEstilizado = styled.footer`
  height: 100%;
  color: white;
  padding: 1em;
  background-color: var(--azul-escuro);
  text-align: center;
`;

const ListaEstilizada = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 10%;
  margin: 1em auto;
`;

const ItemEstilizado = styled.li`
  list-style-type: none;
`;

export default function Rodape() {
  return (
    <RodapeEstilizado>
      <ListaEstilizada>
        {listaRedeSociais.map((redeSocial) => (
          <ItemEstilizado>
            <a href={redeSocial.href}>
              <img src={redeSocial.src} alt={redeSocial.alt} />
            </a>
          </ItemEstilizado>
        ))}
      </ListaEstilizada>
      <p>
        2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.
      </p>
    </RodapeEstilizado>
  );
}
