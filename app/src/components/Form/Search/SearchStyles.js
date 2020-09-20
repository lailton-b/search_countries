import styled from 'styled-components';

export const SearchWrapper = styled.form`
  background-color: #fff;
  display: flex;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px ${(props) => props.theme.colors.shadow};
  background-color: ${(props) => props.theme.colors.primary};

  &:focus-within {
    outline: none;
    box-shadow: 1px 2px 3px 0px ${(props) => props.theme.colors.shadow},
      3px 3px 3px 0px ${(props) => props.theme.colors.primary},
      6px 6px 3px 0px ${(props) => props.theme.colors.shadow};
  }

  @media screen and (max-width: 929px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 0;
  padding: 0 26px 0 32px;
  cursor: text;

  svg path {
    fill: ${(props) => props.theme.colors.search};
  }
`;

export const Input = styled.input`
  border: none;
  height: 56px;
  outline: none;
  width: 405px;
  padding-right: 30px;
  font-size: 0.875rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.search};
  border-radius: 5px;

  &::placeholder {
    opacity: 1;
    color: ${(props) => props.theme.colors.search};
  }

  @media screen and (max-width: 929px) {
    width: 100%;
  }
`;
