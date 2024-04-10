import styled from 'styled-components'

export const TableStyle = styled.div`
  width: 700px;
  margin: auto;
  font-weight: 600;
  ul.table-head {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    padding: 16px 20px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  ul.table-row {
    margin-bottom: 24px;
    & li {
      background-color: #fff;
      box-shadow: 0 0px 4px 2px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      padding: 24px 32px;
      margin-bottom: 24px;
      transition: all 0.2s ease;

      &:hover {
        cursor: pointer;
        box-shadow: none;
      }

      &:nth-child(odd) {
        background-color: rgba(30, 158, 186, 0.3);
      }
      &:nth-child(even) {
        background-color: rgba(30, 158, 186, 0.1);
      }
      &.completed {
        color: gray;
        background-color: lightgray;
        box-shadow: none;
      }
    }
  }

  input {
    border: none;
    padding: 4px 12px;
    font-size: 0.9;
    font-weight: bold;
    &:hover {
      background: rgba(104, 104, 104, 0.2);
    }
  }
`

export const DisplayTaskStyle = styled.li`
  display: flex;
  justify-content: space-between;
`
