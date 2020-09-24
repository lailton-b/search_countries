import styled from 'styled-components';

export const CustomSelect = styled.button`
  position: relative;
  width: 200px;
  height: 56px;
  display: flex;
  align-items: center;
  border: none;
  text-align: left;
  background-color: ${(props) => props.theme.colors.primary};
  box-shadow: 1px 1px 5px 0px ${(props) => props.theme.colors.shadow};
  border-radius: 5px;
  z-index: 10;
  cursor: pointer;
  transition: 0.4s;

  &.activeSelect:focus {
    box-shadow: 1px 1px 5px 0px ${(props) => props.theme.colors.shadow};
  }

  &:focus {
    outline: none;
    box-shadow: 1px 2px 3px 0px ${(props) => props.theme.colors.shadow},
      3px 3px 3px 0px ${(props) => props.theme.colors.primary},
      6px 6px 3px 0px ${(props) => props.theme.colors.shadow};
  }

  &.activeSelect:after {
    transform: rotate(-180deg);
    top: 45%;
    transition: 0.5s;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${(props) => props.theme.colors.text};
    transition: 0.5s;
  }

  span {
    padding-left: 24px;
  }

  .select {
    text-transform: capitalize;
  }

  @media screen and (max-width: 929px) {
    margin-top: 50px;
  }
`;

export const RegionSelect = styled.form`
  position: absolute;
  box-sizing: border-box;
  width: 200px;
  top: 45px;
  color: ${(props) => props.theme.colors.text};
  padding: 20px 0;
  appearance: none;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 0px ${(props) => props.theme.colors.shadow};
  pointer-events: none;
  opacity: 0;
  transition: 0.5s;

  &.activeSelect {
    pointer-events: all;
    opacity: 1;
    top: 60px;
  }
`;

export const Option = styled.li`
  transition: text-decoration 0.8s;

  &:hover {
    text-decoration: underline;
  }

  input {
    display: none;
  }

  label {
    padding: 9px 0 9px 20px;
    display: block;
    cursor: pointer;
  }
`;

export const RemoveSelect = styled.span`
  position: relative;
  right: -7px;
  top: 1px;
  height: 12px;
  background-color: ${(props) => props.theme.colors.shadow};
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: 0.4s;

  &:focus {
    outline: none;
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.text};
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 2px;
    height: 8px;
    background-color: ${(props) => props.theme.colors.text};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 2px;
    height: 8px;
    background-color: ${(props) => props.theme.colors.text};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
