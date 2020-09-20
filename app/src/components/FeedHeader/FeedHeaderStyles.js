import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 40px;
  padding: 0 15px;

  @media screen and (max-width: 929px) {
    flex-direction: column;
    align-items: baseline;
    height: auto;
  }

  @media screen and (max-width: 634px) {
    padding: 0;
  }
`;
