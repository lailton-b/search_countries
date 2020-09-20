import styled from 'styled-components';

export const Main = styled.main`
  max-width: 1180px;
  padding: 0 15px;
  margin: 50px auto 0;

  @media screen and (max-width: 1225px) {
    max-width: 886px;
  }

  @media screen and (max-width: 929px) {
    max-width: 590px;
  }

  @media screen and (max-width: 634px) {
    box-sizing: border-box;
    max-width: 440px;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 634px) {
    justify-content: center;
  }
`;
