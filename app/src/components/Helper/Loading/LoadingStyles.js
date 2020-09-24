import styled from 'styled-components';

export const Svg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 108px;
  height: 105px;
  fill: transparent;
`;

export const Load = styled.circle`
  stroke: ${(props) => props.theme.colors.text};
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-dasharray: 314;
  stroke-dashoffset: 314;
  transform-origin: 50% 50%;
  animation: load 1.5s ease-out infinite;

  @keyframes load {
    0% {
      stroke-dashoffset: 314;
      transform: rotate(0deg);
    }
    100% {
      stroke-dashoffset: -314;
      transform: rotate(360deg);
    }
  }
`;
