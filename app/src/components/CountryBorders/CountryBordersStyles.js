import styled from 'styled-components';

export const Button = styled.button`
  padding: 9px 0px;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  box-shadow: 1px 1px 5px 0px ${(props) => props.theme.colors.shadow};
  cursor: pointer;
  margin-right: 8px;
  margin-top: 10px;
  transition: 0.4s;

  @media screen and (max-width: 470px) {
    padding: 9px 0px;
  }

  &:focus,
  &:hover {
    outline: none;
    box-shadow: 1px 2px 3px 0px ${(props) => props.theme.colors.shadow},
      3px 3px 3px 0px ${(props) => props.theme.colors.primary},
      6px 6px 3px 0px ${(props) => props.theme.colors.shadow};
  }

  a {
    color: ${(props) => props.theme.colors.text};
    padding: 9px 28px;

    @media screen and (max-width: 470px) {
      padding: 9px 20px;
    }

    &:focus {
      outline: none;
    }
  }
`;
