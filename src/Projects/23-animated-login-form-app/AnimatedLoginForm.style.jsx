import { styled, keyframes } from 'styled-components'
import { Avatar } from '../../assets'

export const Container = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`
const animateLogo = keyframes`
0% {
  border-radius: 0 0 0 0;
  transform: rotate(0deg);
}
25% {
  border-radius: 25%;
  transform: rotate(45deg);
}
50% {
  border-radius: 50%;
  transform: rotate(90deg);
}
75% {
  border-radius: 75%;
  transform: rotate(180deg);
}
100% {
  transform: scale(0);
}
`

export const Animation = styled.div`
  width: 240px;
  height: 240px;
  background: ${(props) => props.background || `URL(${Avatar}) center/cover`};
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 72px;
  border: 4px solid ${(props) => props.borderColor || '#333'};
  border-radius: 4px;
  box-shadow: 16px 16px 16px rgba(0, 0, 0, 0.2);
  &.animate {
    animation: ${animateLogo} 1s linear;
    transform: rotate(180deg);
    border-radius: 50%;
    transform: scale(0);
    transition: 1s linear;
  }
`
