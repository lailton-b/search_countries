import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  width: 80%;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 535px;

  > svg {
    width: 100%;
    height: 120%;
    display: block;
  }
`;

export const Oops = styled.h2`
  font-size: 2rem;
  margin: 30px 0 10px;

  @media screen and (max-width: 440px) {
    font-size: 1.5rem;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 440px) {
    font-size: 0.875rem;
  }
`;

export const Back = styled.button`
  margin-top: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 1px 1px 5px 0px ${(props) => props.theme.colors.shadow};
  transition: 0.4s;
  border: none;

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
