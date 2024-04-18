import styled, { keyframes } from 'styled-components'

const animateExpStyle = keyframes`
0% { transform: translateY(-100px)}
100% { transform: translateY(0)}
`

export const ExpenseItemStyle = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  border-bottom: 1px solid;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
  &.expense-details {
    width: 70%;
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    align-items: center;
  }
  &:hover {
    cursor: pointer;
    box-shadow: none;
  }
  &.edit {
    color: lightgray;
  }
  animation: ${animateExpStyle} 2s linear;
`
