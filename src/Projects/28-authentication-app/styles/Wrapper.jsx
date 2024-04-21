import styled, { keyframes } from 'styled-components'

const shake = keyframes`
0% { transform: translateY(2px, 2px) rotate(0)}
10% { transform: translateY(-2px, -4px) rotate(-1deg)}
20% { transform: translateY(-4px, 0px) rotate(-1deg)}
30% { transform: translateY(4px, 2px) rotate(0)}
40% { transform: translateY(-2px, -2px) rotate(1deg)}
50% { transform: translateY(-2px, 4px) rotate(-1deg)}
60% { transform: translateY(-4px, 2px) rotate(0)}
70% { transform: translateY(4px, 2px) rotate(-1deg)}
80% { transform: translateY(-2px, -2px) rotate(1deg)}
90% { transform: translateY(2px, 4px) rotate(0)}
100% { transform: translateY(2px, -2px) rotate(-1deg)}
`

export const Wrapper = styled.div`
  &.active {
    animation: ${shake} 0.5s ease-out;
    input {
      color: red;
      &::placeholder {
        color: red;
      }
      &.hide {
        display: none;
      }
    }
  }
`
