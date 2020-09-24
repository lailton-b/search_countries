import styled from 'styled-components';

export const Template = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 0 0 1px 0px #858585;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1180px;
  height: 80px;
  margin: 0 auto;
  padding: 0 15px 0 30px;

  @media screen and (max-width: 1224px) {
    max-width: 856px;
  }

  @media screen and (max-width: 929px) {
    max-width: 560px;
  }

  @media screen and (max-width: 634px) {
    max-width: 425px;
    padding: 0 0 0 15px;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;

  a {
    color: ${(props) => props.theme.colors.text};

    &:focus {
      outline: none;
    }
  }

  @media screen and (max-width: 634px) {
    font-size: 1.1rem;
  }
`;

export const Switch = styled.button`
  font-size: 1rem;
  font-weight: 600;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px;

  &:focus {
    outline: none;
    box-shadow: 1px 1px 6px ${(props) => props.theme.colors.shadow};
  }

  &:active {
    outline: none;
    box-shadow: none;
  }

  svg {
    fill: ${(props) => props.theme.colors.fill};
  }

  span {
    margin-left: 10px;

    @media screen and (max-width: 370px) {
      max-width: 37px;
      max-height: 20px;
      overflow: hidden;
      text-align: left;
      margin-left: 7px;
    }
  }

  @media screen and (max-width: 634px) {
    padding: 15px;

    &:focus {
      box-shadow: none;
    }
  }
`;
