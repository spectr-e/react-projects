import styled from 'styled-components'

export const BudgetStyle = styled.h3`
  display: flex;
  input {
    outline: none;
    border: none;
    width: 100px;
    background: inherit;
    color: inherit;
    text-align: right;
    border-bottom: 1px solid #9999;
    padding: 4px 8px;
    margin-bottom: 20px;
    font-weight: bold;
    &::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:focus {
      background: #fff;
      color: #333;
    }
  }
`
