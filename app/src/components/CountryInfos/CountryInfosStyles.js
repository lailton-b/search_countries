import styled from 'styled-components';

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin: 38px 0 73px 0;

  @media screen and (max-width: 634px) {
    width: auto;
  }

  @media screen and (max-width: 470px) {
    flex-direction: column;
    margin-bottom: 40px;
  }
`;

export const Group = styled.ul`
  &:first-child {
    @media screen and (max-width: 470px) {
      margin-bottom: 40px;
    }
  }
`;

export const Info = styled.li`
  display: flex;
  flex-wrap: wrap;
  font-size: 1rem;
  margin-bottom: 12px;
`;

export const InfoTitle = styled.h3`
  margin-right: 4px;
  font-weight: 600;
  font-size: 1rem;
`;

export const InfoResponse = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  margin-right: 4px;
`;
