import styled from 'styled-components';
import theme from '../../Theme/theme';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    background: ${theme.background};
`

export const Content = styled.div`
    width: 99%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 colunas com largura igual */
    grid-template-rows: 250px;              /* altura fixa de 250px para as linhas */
    grid-gap: 2px;                         /* espaçamento entre as células */
    padding: 100px 0;                       /* preenchimento acima e abaixo do grid */

    @media (max-width: 1024px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Reduzir o tamanho das colunas para telas menores */
      }
    
      @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Ainda mais redução para telas menores */
      }
`;

// Estilizando o componente Photo
export const Photo = styled.img`
  width: 100%;            /* ocupar 100% do espaço da célula */
  height: 100%;           /* ocupar 100% do espaço da célula */
  object-fit: cover;      /* ajustar a imagem dentro do espaço disponível */
  cursor: pointer;

  // /* Aplicando estilos específicos ao primeiro filho */
  // &:nth-child(1) {
  //   grid-column-start: span 2;  /* ocupa duas colunas */
  // }

  // &:nth-child(4) {
  //   grid-column-start: span 2;  /* ocupa duas colunas */
  // }

  // &:nth-child(8) {
  //   grid-column-start: span 2;  /* ocupa duas colunas */
  // }

  // &:nth-child(103) {
  //   grid-column-start: span 2;  /* ocupa duas colunas */
  // }

  // @media (max-width: 768px) {
  //   /* Para telas menores, fazer os primeiros itens ocuparem apenas uma coluna */
  //   &:nth-child(1), &:nth-child(4), &:nth-child(7), &:nth-child(10) {
  //     grid-column: span 1;  /* cada um ocupa uma coluna */
  //   }
  // }

`;