import styled from 'styled-components';

export const Main = styled.main`
  max-width: 1180px;
  margin: 80px auto 80px auto;
  padding: 0 30px 0 30px;

  @media screen and (max-width: 1224px) {
    max-width: 856px;
  }

  @media screen and (max-width: 929px) {
    max-width: 560px;
  }

  @media screen and (max-width: 634px) {
    max-width: 425px;
    padding: 0 15px;
    margin: 40px auto 0;
  }
`;

export const Back = styled.button`
  margin-bottom: 80px;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 1px 1px 5px 0px ${(props) => props.theme.colors.shadow};
  transition: 0.4s;
  border: none;

  @media screen and (max-width: 634px) {
    margin-bottom: 50px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 136px;
    height: 40px;
    font-size: 1rem;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  &:focus,
  &:hover {
    outline: none;
    box-shadow: 1px 2px 3px 0px ${(props) => props.theme.colors.shadow},
      3px 3px 3px 0px ${(props) => props.theme.colors.primary},
      6px 6px 3px 0px ${(props) => props.theme.colors.shadow};
  }

  span {
    margin-left: 12px;
    color: ${(props) => props.theme.colors.text};
  }

  svg * {
    stroke: ${(props) => props.theme.colors.text};
  }
`;

export const CountryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1224px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Flag = styled.div`
  min-width: 560px;
  width: 560px;
  min-height: 400px;
  height: 400px;

  @media screen and (max-width: 634px) {
    min-width: auto;
    width: auto;
    min-height: auto;
    height: auto;
  }

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const InfosWrapper = styled.div`
  max-width: 500px;

  @media screen and (max-width: 1224px) {
    margin: 50px 0;
  }
`;
export const CountryName = styled.h1`
  font-size: 2rem;
  font-weight: 800;
`;

export const BorderCountries = styled.div`
  h3 {
    margin-right: 15px;
    display: inline-block;
    font-weight: 600;
    font-size: 1rem;

    @media screen and (max-width: 470px) {
      display: block;
      margin-bottom: 10px;
    }
  }
`;
